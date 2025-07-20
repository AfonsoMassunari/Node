import express, { RequestHandler } from 'express';
import productsRouter from './products';
import voosRouter from './voos';
import { checkAuth } from '../middlewares/checkAuth';

const router = express.Router();

router.use(checkAuth);

router.use('/products', productsRouter);
router.use('/voos', voosRouter);

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.get('/', (req, res) => {
    let name: string = 'Afonso';
    let age: number = 22;
    res.json({ name, age });
});

router.post('/login', async (req, res) => {
    res.json({
        user: req.user,
        auth: req.authInfo,
    });
});

export default router;
