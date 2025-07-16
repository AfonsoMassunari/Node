import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ products: [] });
});

router.post('/', (req, res) => {
    console.log('Params', req.params);
    console.log('Query', req.query);
    console.log('Body', req.body);
    res.json({ products: [] });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'Keyboard', price: 90 });
});

export default router;
