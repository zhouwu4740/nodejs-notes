// 使用 protocol-buffers 库实现数据二进制编解码功能

const fs = require('fs');
const path = require('path');
const protobuf = require('protocol-buffers');   

// 读取proto文件
const schemas = protobuf(fs.readFileSync(path.join(__dirname, 'message.proto')));

const course = schemas.Course.encode({
    id: 1001,
    name: 'Mastering Node.js',
    lessons: [
        { id: 1, title: 'Introduction to Node.js' },
        { id: 2, title: 'Advanced Node.js Concepts' },
        { id: 3, title: 'Node.js in Production' }
    ]
});

console.log(course);

console.log(schemas.Course.decode(course));