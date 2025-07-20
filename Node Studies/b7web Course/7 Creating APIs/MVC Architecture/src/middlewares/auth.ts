import { RequestHandler } from 'express';

export const privateRequest: RequestHandler = (req, res, next) => {
    if (req.headers.authorization) {
        let authorizationToken = req.headers.authorization.split(' ')[1];

        if (authorizationToken === '1234') {
            return next();
        }
    }
    //Auth the user
    let logged = false;

    if (logged) {
        next();
    } else {
        return res.status(401).json({ error: 'Access denied' });
    }
};
