import express from 'express';
import { readFile } from 'fs/promises';
import { writeFile } from 'fs/promises';
import { getContacts, createContact, deleteContact } from '../services/contact';

const dataSource = './data/list.txt';

const router = express.Router();

router.post('/contact', async (req, res) => {
    const { name } = req.body || {};

    if (!name || name.length < 2) {
        return res.json({ error: 'Name needs at least 2 characters' });
    }

    //data processing
    await createContact(name);

    res.status(201).json({ contact: name });
});

router.get('/contacts', async (req, res) => {
    let list = await getContacts();

    res.json({ contacts: list });
});

router.delete('/contact', async (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.json({ error: 'No name sent' });
    }

    await deleteContact(name as string);

    res.json({ contact: name });
});

export default router;
