const fs = require('fs');
/*
You left your computer unlocked and your friend decided to troll you by
copying a lot of your files to random spots all over your file system.

Write a function that returns an array of all the duplicate files. We'll check them by hand before actually deleting them, since programmatically deleting files is really scary. To help us confirm that two files are actually duplicates, return an array of arrays ↴ where:

the first item is the duplicate file
the second item is the original file
For example:

  [['/tmp/parker_is_dumb.mpg', '/home/parker/secret_puppy_dance.mpg'],
 ['/home/trololol.mov', '/etc/apache2/httpd.conf']]

You can assume each file was only duplicated once.
*/
function findDuplicateFiles(startingDirectory) {
  const filesSeenAlready = {};

  const stack = [startingDirectory];

  const duplicates = [];

  while (stack.length) {
    const currentPath = stack.pop();
    const currentFile = fs.statSync(currentPath);

    if (currentFile.isDirectory()) {
      fs.readdirSync(currentPath).forEach(path => stack.push(`${currentPath}/${path}`));
    } else {

      const fileContents = fs.readFileSync(currentPath);
      const currentLastEditedTime = currentFile.mtime;

      if (filesSeanAlready.hasOwnProperty(fileContents)) {
        const existingFile = filesSeenAlready[fileContents];

        if (currentLastEditedTime > existingFile.currentLastEditedTime) {
          duplicates.push(currentPath, existingFile.path);
        } else {

          duplicates.push([existingFile.path, currentPath]);

          filesSeenAlready[fileContents] = { lastEditedTime: currentLastEditedTime, path: currentPath }
        }
      } else {
        filesSeenAlready[fileContents] = { lastEdited: currentLastEditedTime, path: currentPath }
      }
    }
  }
}