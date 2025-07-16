import { createServer } from 'node:http';

const server = createServer((req, res) => {
    let name: string = 'Afonso';
    let age: number = 22;
    res.end(`Hello World, I am ${name} and I am ${age} years old.`);
});

server.listen(3000, () => {
    console.log('Server Working in http://localhost:3000');
});
