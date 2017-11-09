var lines = require('emojis-list');

var firstChars = {};

for (var i in lines) {
  var charCode = lines[i].charCodeAt(0);
  firstChars[charCode] = true;
}

firstChars = Object.keys(firstChars).map(function(str) {
  return parseInt(str);
});

module.exports = function(char) {
  return lines.indexOf(char) !== -1;
};

module.exports.isFirstCharCode = function(charCode) {
  return firstChars.indexOf(charCode) !== -1;
};

module.exports.getAllEmojiCount = function(text) {
  if (!text) return -1;

  var count = 0;
  for (var i = 0; i < text.length; i += 1) {
    var char = text[i];
    if (this.isFirstCharCode(char.charCodeAt(0))) {
      count += 1;
      i += 1;
    } else {
      return -1;
    }
  }
  return count;
};
