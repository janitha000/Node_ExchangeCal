var fs = require('fs');
var zlib = require('zlib');

var data = 'My name is janitha';

var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'UTF8');
writeStream.end();

fs.createReadStream('output.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('output.txt.gz'));

console.log('Prohram is ended');
