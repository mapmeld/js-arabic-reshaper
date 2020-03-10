# js-arabic-reshaper

## This project is archived

## NON-GPL, all-languages Arabic Unicode module here:

https://github.com/georeactor/alif-toolkit

--------

Text reshaper for Arabic text - ported from <a href='https://github.com/mpcabd/python-arabic-reshaper'>Python</a>
and Java versions.

## Context

Arabic script is very special with two essential features:

1. It is written from right to left.
2. The characters change shape according to their surrounding characters.

So when you try to print text written in Arabic script in an application
– or a library – that doesn’t support Arabic you might end up
with something that looks like this:

![Arabic text written from left to right with no reshaping](http://mpcabd.xyz/wp-content/uploads/2012/05/arabic-1.png)

We have two problems here, first, the characters are in the isolated form,
which means that every character is rendered regardless of its surroundings,
and second is that the text is written from left to right.

***This project does not solve the right-to-left issue, only the reshaping***

Displayed in correct right-to-left order:

![Arabic text written from right to left with no reshaping](http://mpcabd.xyz/wp-content/uploads/2012/05/arabic-6.png)

The only issue left to solve is to reshape those characters and replace them
with their correct shapes according to their surroundings. Using this library
helps with the reshaping so we can get the proper result like this:

![Arabic text written from right to left with reshaping](http://mpcabd.xyz/wp-content/uploads/2012/05/arabic-3.png)

## Install and Use

On the command-line:

```bash
npm install js-arabic-reshaper --save
```

Then in the source code:

```javascript
const Reshaper = require('arabic-reshaper');
Reshaper.reshape(arabicWord);

// options
Reshaper.reshape(arabicWord, {
  ligatures: true,
  delete_harakat: false
});
```

## Tests

```
npm install
npm install mocha -g
mocha
```

## License

Open source, GPL v3+  (same as Python Arabic Reshaper)
