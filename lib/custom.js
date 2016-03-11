var GameUtils = {
  delayedWrite: function(delay, section) {
    setTimeout(function() {
      squiffy.ui.write(squiffy.story.sections[section].text);
    }, delay);
  }
};

