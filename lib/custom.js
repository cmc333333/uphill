function GameUtils(squiffy) {
  var originalClear = squiffy.ui.clearScreen,
      backgroundDiv = $('div.background');

  squiffy.ui.clearScreen = function() {
    backgroundDiv.empty();
    originalClear();
  };

  return {
    /* Display text from another section or passage after a given timeout (in
     * milliseconds */
    delayed: function(delay, sectionOrPassage) {
      var jump;
      if (sectionOrPassage in squiffy.story.section.passages) {
        jump = squiffy.story.passage;
      } else {
        jump = squiffy.story.go;
      }
      setTimeout(function() { jump(sectionOrPassage) ; }, delay);
    },
    canvas: $('canvas.background')[0]
  };
}
