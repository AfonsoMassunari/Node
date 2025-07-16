import { Router } from 'express';
import { prisma } from '../libs/prisma';
import {
    createUser,
    createUsers,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser,
} from '../services/user';
import { Prisma } from '@prisma/client';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: 'Testador 3',
        email: 'testador.massunari@gmail.com',
        posts: {
            create: {
                title: 'Titulo de teste',
                body: 'Corpo de teste',
            },
        },
    });
    if (user) {
        res.status(201).json({ user });
    } else {
        res.status(500).json({ error: 'Email já cadastrado' });
    }
});

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        { name: 'João', email: 'joao.@hotmail.com' },
        { name: 'Luiz', email: 'luiz.@hotmail.com' },
        { name: 'Thiago', email: 'Thiago.@hotmail.com' },
    ]);
    res.json({ result });
});

mainRouter.get('/users', async (req, res) => {
    const result = await getAllUsers();
    res.json({ result });
});

mainRouter.get('/user', async (req, res) => {
    const result = await getUserByEmail('joao.@hotmail.com');
    res.json({ result });
});

mainRouter.put('/user', async (req, res) => {
    const result = await updateUser();
    res.json({ result });
});

mainRouter.delete('/user', async (req, res) => {
    const result = await deleteUser();
    res.json({ result });
});
