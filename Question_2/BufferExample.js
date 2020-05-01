const buffer = Buffer.alloc(40);
console.log(buffer);

buffer.fill('taman gupta')
console.log(buffer);


const initializedBuffer = Buffer.from([2, 45, 74, 32, 45, 85, 65]);
console.log('initializedBuffer', initializedBuffer);

const bufferStringWithEncoding = Buffer.from('some random string', 'utf8');

console.log('bufferStringWithEncoding', bufferStringWithEncoding)

console.log(bufferStringWithEncoding.toString()) // to get original data
 

// Some more methods are also available like array methods indexOf , split , keys, entries...