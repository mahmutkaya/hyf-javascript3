class Movie {
  constructor(title, director) {
    this.title = title;
    this.director = director;
    this.star = [];
    this.writer = [];
    this.rating = [];
  }

  getTitle() {
    return this.title;
  }

  getDirector() {
    return this.director;
  }

  addStar(star) {
    this.star.push(star);
  }

  getStars() {
    return this.star;
  }

  addWriter(writer) {
    this.writer.push(writer);
  }

  getWriters() {
    return this.writer;
  }

  addRating(rating) {
    this.rating.push(rating);
  }

  // getAverageRating() {
  //   // add your code here
  // }

  // ... Add yours :-) Look to IMDB for inspiration
}

class StaffMember {
  constructor(name, role, dateOfBirth) {
    this.name = name;
    this.role = role;
    this.dateOfBirth = dateOfBirth;
    this.movie = [];

  }

  addMovie(movie) {
    this.movie.push(movie);
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  // getAge() {
  //   // add your code here
  // }
}

// Pick your favorite movie from http://www.imdb.com/

const myMovie = new Movie('Concussion');

const firstActor = new StaffMember("Will Smith");
myMovie.addStar(firstActor);
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
// console.log(`Director: ${director.getName()}`);