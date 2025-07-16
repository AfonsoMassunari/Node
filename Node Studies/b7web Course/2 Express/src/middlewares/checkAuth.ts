import { RequestHandler } from 'express';

export const checkAuth: RequestHandler = (req, res, next) => {
    let logged = true;
    if (logged) next();
    else res.status(403).json({ error: "Middleware doesn't allowed" });
};
