const fs = require('fs');

// reading an file through stream

let readStream = fs.createReadStream('./file.txt');


readStream.on('data', (chunk) => {
    chunk += 'some random string'
    console.log(chunk);
})

readStream.on('open', () => {
    console.log('Stream opened...');
});

// this event will fire at the end of readStream is done
readStream.on('end', () => {
    console.log('Stream Closed...');

  });


// write files using streams

// const readStream = fs.createReadStream('./file.txt');
// const writeStream = fs.createWriteStream('./file1.txt');

// readStream.pipe(writeStream);
