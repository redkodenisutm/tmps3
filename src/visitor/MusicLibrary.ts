import Song from "./Song.js";

class MusicLibrary {
  songsList: Song[];
  constructor() {
    this.songsList = [];
  }
  addSong(song) {
    this.songsList.push(song);
  }
  accept(visitor) {
    return visitor.visit(this);
  }
}

export default MusicLibrary;
