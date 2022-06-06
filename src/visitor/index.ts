import MusicLibrary from "./MusicLibrary.js";
import RockMusicVisitor from "./RockMusicVisitor.js";
import Song from "./Song.js";

export default () => {
  var rockMusicVisitor = new RockMusicVisitor();
  var song1 = new Song("Bohemian Rhapsody", "Rock");
  var song2 = new Song("Stair way to Heaven", "Rock");
  var song3 = new Song("Opps I did it again", "Pop");
  var song4 = new Song("Crazy", "Country");
  var musicLibrary = new MusicLibrary();
  musicLibrary.addSong(song1);
  musicLibrary.addSong(song2);
  musicLibrary.addSong(song3);
  musicLibrary.addSong(song4);
  console.log("Rock playlist: ", musicLibrary.accept(rockMusicVisitor));
};
