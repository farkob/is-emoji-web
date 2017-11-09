var assert = require('assert');

var isEmoji = require('../index.js');


describe('is-emoji', function() {
  it('should identify emoji', function() {
    assert(isEmoji('🌻'));
    assert(!isEmoji('q'));
  });

  it('should identify emoji first char codes', function() {
    assert(isEmoji.isFirstCharCode('🌻'[0].charCodeAt(0)));
    assert(!isEmoji.isFirstCharCode('a'[0].charCodeAt(0)));
  });

  it('should return all emoji count', function() {
    assert(isEmoji.getAllEmojiCount('😁😂😃😄') === 4);
    assert(isEmoji.getAllEmojiCount('😁😂😃a😄') === -1);
    assert(isEmoji.getAllEmojiCount('a') === -1);
    assert(isEmoji.getAllEmojiCount('') === -1);
  });
});
