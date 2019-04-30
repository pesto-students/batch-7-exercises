## Instructions


Get an unused filename by appending a number if it exists: file.txt → file (1).txt

Useful for safely writing, copying, moving files without overwriting existing files.

.
├── file (1).txt
├── file.txt
└── a.json

unusedFilename('file.txt').then(filename => {
  console.log(filename);
  //=> 'file (2).txt'
});

==== API ====
unusedFilename(filepath)
Returns a Promise<string>.

unusedFilename.sync(filepath)
Returns a string.

filepath
Type: string

Refer to test cases for 'unusedFilename' for further info
