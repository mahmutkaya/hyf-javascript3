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

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.dateOfBirth;
  }
}

const myMovie = new Movie("Concussion", " Peter Landesman");

const writer = new StaffMember(" Jeanne Marie Laskas", 'writer', '-');

const firstActor = new StaffMember("Will Smith", "star", 1968);
const secondActor = new StaffMember("Alec Baldwin", "star", 1958);

myMovie.addWriter(writer);

myMovie.addStar(firstActor);
myMovie.addStar(secondActor);

myMovie.addRating(7.1);

console.log(myMovie);
