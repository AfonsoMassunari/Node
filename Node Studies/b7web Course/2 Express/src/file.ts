import { readFile, writeFile, unlink } from 'fs/promises';

const fileName = './test.txt';

const write = async () => {
    console.log('Writing in the file');

    const list = ['Afonso', 'Luiz', 'Pedro'];
    const listTxt = list.join('\n');

    await writeFile('./test.txt', listTxt);
};

const read = async () => {
    const fileContent = await readFile('./test.txt', { encoding: 'utf8' });

    const list = fileContent.split('\n');
    console.log(list);
};

const update = async () => {
    const fileContent = await readFile(fileName, { encoding: 'utf8' });

    const list = fileContent.split('\n');
    list.push('Otavio');
    console.log(list);

    const listTxt = list.join('\n');
    await writeFile(fileName, listTxt);
};

const del = async () => {
    await unlink(fileName);
};

write();
// read();
// update();
// del();
