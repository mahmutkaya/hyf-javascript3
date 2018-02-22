"use strict";
{
  const apiPath = "https://api.github.com";
  const users = "/users";
  const hyf = "/hackyourfuture";
  const repos = "/repos";
  const contr = "/contributors";

  const container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);

  const myFoot = document.createElement("footer");
  document.body.appendChild(myFoot);

  const div1 = document.createElement("div");
  div1.id = "div1";
  container.appendChild(div1);

  const h1 = document.createElement("h1");
  h1.innerText = "Repositories";
  div1.appendChild(h1);

  const srcInput = document.createElement("input");
  div1.appendChild(srcInput);

  const button1 = document.createElement("button");
  button1.id = "bttn1";
  button1.innerText = "hyf-repos search";
  div1.appendChild(button1);

  const button2 = document.createElement("button");
  button2.innerText = "hyf-repos full list";
  button2.id = "bttn2";
  div1.appendChild(button2);

  const button3 = document.createElement("button");
  button3.innerText = "users repos";
  button3.id = "bttn3";
  div1.appendChild(button3);

  const div2 = document.createElement("div");
  div2.id = "div2";
  container.appendChild(div2);

  const div4 = document.createElement("div");
  div4.id = "div4";
  container.appendChild(div4);

  button1.addEventListener("click", function() {
    getData("GET", apiPath + repos + hyf + "/" + srcInput.value).then(function(
      data
    ) {
      console.log(data);
      const ourData = JSON.parse(data);
      getOneRepo(ourData);
    });
    getData("GET", apiPath + repos + hyf + "/" + srcInput.value + contr)
      .then(function(data) {
        const contrData = JSON.parse(data);
        getContr(contrData);
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  button2.addEventListener("click", function() {
    getData("GET", apiPath + users + hyf + repos)
      .then(function(data) {
        const allRepo = JSON.parse(data);
        getAllRepos(allRepo);
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  button3.addEventListener("click", function() {
    getData("GET", apiPath + users + "/" + srcInput.value + repos)
      .then(function(data) {
        const usersRepo = JSON.parse(data);
        getUsers(usersRepo);
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  function getContr(data) {
    let htmlContrString = "";
    htmlContrString = "<h4> contributors: </h4>";
    for (let cI = 0; cI < data.length; cI++) {
      htmlContrString +=
        "<div class='div4'>" +
        "<p>" +
        "<em>" +
        data[cI].login +
        "</em>" +
        "</p>" +
        "</div>";
    }
    div4.innerHTML = "";
    div4.insertAdjacentHTML("beforeEnd", htmlContrString);
  }

  function getOneRepo(data) {
    let htmlString = "";
    htmlString +=
      "<div class='div3'>" +
      "<li><a target='_blank' href=" +
      data.html_url +
      ">" +
      data.name +
      "</a></li>" +
      "<p>" +
      " created date: " +
      data.created_at +
      "</p>" +
      "<p>" +
      " fork: " +
      data.forks +
      " star: " +
      data.stargazers_count +
      " watch: " +
      data.watchers +
      "</p>" +
      "<h3>" +
      " Description: " +
      data.description +
      "</h3>" +
      "</div>";
    div2.innerHTML = "";
    div2.insertAdjacentHTML("beforeEnd", htmlString);
  }

  function getAllRepos(data) {
    let AllRepoString = "";
    for (let i = 0; i < data.length; i++) {
      AllRepoString +=
        "<div class='div3'>" +
        "<li><a target='_blank' href=" +
        data[i].html_url +
        ">" +
        data[i].name +
        "</a></li>" +
        "<p>" +
        " created date: " +
        data[i].created_at +
        "</p>" +
        "<p>" +
        " fork: " +
        data[i].forks +
        " star: " +
        data[i].stargazers_count +
        " watch: " +
        data[i].watchers +
        "</p>" +
        "<h3>" +
        " Description: " +
        data[i].description +
        "</h3>" +
        "</div>";
    }
    div4.innerHTML = "";
    div2.innerHTML = "";
    div2.insertAdjacentHTML("beforeEnd", AllRepoString);
  }

  function getUsers(data) {
    let userString = "";
    userString =
      "<div class='imgDiv'>" +
      "<img src='" +
      data[0].owner.avatar_url +
      "'>" +
      "<br>" +
      "<h3>" +
      data[0].owner.login +
      " repositories: " +
      "</h3>" +
      "</div>";
    for (let i = 0; i < data.length; i++) {
      userString +=
        "<div class='div3'>" +
        "<li><a target='_blank' href=" +
        data[i].html_url +
        ">" +
        data[i].name +
        "</a></li>" +
        "<p>" +
        " created date: " +
        data[i].created_at +
        "</p>" +
        "<p>" +
        " fork: " +
        data[i].forks +
        " star: " +
        data[i].stargazers_count +
        " watch: " +
        data[i].watchers +
        "<p>" +
        "<h3>" +
        " Description: " +
        data[i].description +
        "</h3>" +
        "</div>";
    }
    div4.innerHTML = "";
    div2.innerHTML = "";
    div2.insertAdjacentHTML("beforeEnd", userString);
  }

  function getData(method, url) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function() {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }
}
