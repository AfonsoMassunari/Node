import { Request, Response } from 'express';
import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    // let newUser = await User.create({
    //     name: { firstName: 'Monaliza', lastName: 'Fernandes' },
    //     email: 'mona@apris.org',
    //     age: 200,
    //     interests: ['arte', 'pizza'],
    // });
    // let newUser = new User();
    // newUser.name = { firstName: 'Andre', lastNmae: 'Soares' };
    // newUser.email = 'andre@hotmail.com';
    // newUser.age = 35;
    // newUser.interests = ['programming', 'skate'];
    // let resultado = await newUser.save();
    // console.log('Novo Usuário', resultado);
    // let usuarios = await User.find({
    //     age: { $gt: 10, $lt: 50 },
    // })
    //     .sort({ age: 1 })
    //     .skip(0)
    //     .limit(2);
    // console.log('Usuarios', usuarios);

    // await User.updateMany({ age: { $gte: 30 } }, { age: 30 });

    // await User.updateOne({ email: 'fulano@gmail.com' }, { age: 50 });

    // let fulano = await User.findOne({ email: 'fulano@gmail.com' });
    // fulano.name.lastName = 'Silva';
    // fulano.age = 55;
    // await fulano.save();

    // await User.findOneAndDelete({
    //     email: 'andre@hotmail.com',
    // });

    // await User.deleteOne({ email: 'andre@hotmail.com' });

    let users = await User.find({}).sort({ 'name.firstName': 1 });

    res.render('pages/home', {
        users,
    });
};
