import { User } from '../types/user';

export const findUserByEmailandPassword = async (
    email: string,
    password: string
) => {
    //Consult DB
    if (email === 'admin@hotmail.com' && password === '1234') {
        const user: User = {
            id: '2',
            name: 'Fulano',
        };
        return user;
    }
    return null;
};
