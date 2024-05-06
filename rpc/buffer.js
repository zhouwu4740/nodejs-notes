const buffer1 = Buffer.from('Hello World');
const buffer2 = Buffer.from([1, 2, 3]);

console.log(buffer1);
console.log(buffer1.toString());

console.log(buffer2)
console.log(new Int8Array(buffer2))
