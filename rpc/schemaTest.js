// schema.js 是通过 protocol-buffers 根据 schema 文件生成的
// npm install -g protocol-buffers
// prototocl-buffer schema.proto -o schema.js
const schemas = require('./schema');

var buffer = schemas.Course.encode({
    id: 1,
    name: 'Node.js',
    lessons: [
        { id: 1001, title: 'Introduction' },
        { id: 1002, title: 'Basic Syntax' },
        { id: 1003, title: 'Advanced Concepts' },
        { id: 1004, title: 'Error Handling'}
    ]
})

console.log(buffer)
console.log(schemas.Course.decode(buffer))