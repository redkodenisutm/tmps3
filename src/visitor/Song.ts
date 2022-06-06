class Song {
  name: string;
  genre: string;

  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }

  getName() {
    return this.name;
  }
  getGenre() {
    return this.genre;
  }
}

export default Song;
