# is-emoji-web [![Build Status](https://travis-ci.org/farkob/is-emoji-web.svg?branch=master)](https://travis-ci.org/farkob/is-emoji-web)

This is a fork of [smurthas/is-emoji](https://github.com/smurthas/is-emoji), it runs in the browser when packaged and also includes a method to see the emoji count of a string if it consists of only emojis.

## Install
```npm install --save is-emoji-web```

or if you're using yarn,

 ```yarn add is-emoji-web```


## Example
```javascript
var isEmoji = require('is-emoji');

isEmoji('🌻'); // true
isEmoji('🌻'); // true

// to see the emoji count

isEmoji.getAllEmojiCount('🌻🌻'); // 2
isEmoji.getAllEmojiCount('🌻a🌻'); // -1

// for string iteration, since emoji char will be broken up over two indexes.
var str = 'abc🚲def';

for (var i = 0; i < str.length; i++) {
  var s = str[i];
  // will be true for i == 3, which will tell you
  if (isEmoji.isFirstCharCode(s.charCodeAt(0))) {
    // the character is 4 bytes, so concatenate them
    s += str[i+1];
  }

  console.log(s);
}

```
