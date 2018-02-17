"use strict";

const apiPath = "https://api.github.com";
const users = "/users";
const hyf = "/hackyourfuture";
const repos = "/repos";

const container = document.createElement("div");
container.id = 'container';
document.body.appendChild(container);

const myFoot = document.createElement('footer');
document.body.appendChild(myFoot);

const div1 = document.createElement("div");
div1.id = 'div1';
container.appendChild(div1);

const h1 = document.createElement("h1");
h1.innerText = "Repositories";
div1.appendChild(h1);

const srcInput = document.createElement("input");
div1.appendChild(srcInput);

const button1 = document.createElement("button");
button1.id = 'bttn1';
button1.innerText = "hyf-repos search";
div1.appendChild(button1);

const button2 = document.createElement("button");
button2.innerText = "hyf-repos full list";
button2.id = 'bttn2'
div1.appendChild(button2);

const button3 = document.createElement("button");
button3.innerText = "users repos";
button3.id = "bttn3";
div1.appendChild(button3);

const div2 = document.createElement("div");
div2.id = 'div2';
container.appendChild(div2);

//button1: hyf-repos search
button1.addEventListener("click", function () {
  console.log("loading is successful!");
  const ourReq = new XMLHttpRequest();
  ourReq.open("GET", apiPath + repos + hyf + "/" + srcInput.value);
  ourReq.onload = function () {
    const ourData = JSON.parse(ourReq.responseText);
    console.log(ourData);
    getOneRepo(ourData);
  };
  ourReq.send();
});

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

//button2: hyf-repos full list
button2.addEventListener("click", function () {
  console.log("button2; loading is successful!");
  const ourReq = new XMLHttpRequest();
  ourReq.open("GET", apiPath + users + hyf + repos);
  ourReq.onload = function () {
    const ourData = JSON.parse(ourReq.responseText);
    console.log(ourData);
    getAllRepos(ourData);
  };
  ourReq.send();
});

function getAllRepos(data) {
  let htmlString = "";

  for (let i = 0; i < data.length; i++) {
    htmlString +=
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
  div2.innerHTML = "";
  div2.insertAdjacentHTML("beforeEnd", htmlString);
}

//button3: get users
button3.addEventListener("click", function () {
  console.log("button3; loading is successful!");
  const ourReq = new XMLHttpRequest();
  ourReq.open("GET", apiPath + users + "/" + srcInput.value + repos);
  ourReq.onload = function () {
    const ourData = JSON.parse(ourReq.responseText);
    console.log(ourData);
    getUsers(ourData);
  };
  ourReq.send();
});

function getUsers(data) {
  let htmlString = "";
  htmlString =
    "<div class='imgDiv'>" +
    "<img src='" + data[0].owner.avatar_url + "'>" +
    "<br>" +
    "<h3>" + data[0].owner.login + " repositories: " + "</h3>" +
    "</div>";
  for (let i = 0; i < data.length; i++) {
    htmlString += 
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
  div2.innerHTML = "";
  div2.insertAdjacentHTML("beforeEnd", htmlString);
}
