class RockMusicVisitor {
  visit(musicLibrary) {
    var rockPlayList = [];
    var index = 0;
    var songlist = musicLibrary.songsList.length;
    for (var i = 0; i < songlist; i++) {
      var song = musicLibrary.songsList[i];
      if (song.getGenre() == "Rock") {
        rockPlayList[index] = song.getName();
        index++;
      }
    }
    return rockPlayList;
  }
}

export default RockMusicVisitor;
