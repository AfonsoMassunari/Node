import { prisma } from '../libs/prisma';
import { Prisma } from '@prisma/client';

export const createUser = async (data: Prisma.UserCreateInput) => {
    const user = await prisma.user.upsert({
        where: {
            email: data.email,
        },
        update: {
            role: 'ADMIN',
        },
        create: data,
    });

    return user;
};

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    try {
        const result = await prisma.user.createMany({
            data: users,
            skipDuplicates: true,
        });
    } catch (error) {
        return false;
    }
};

export const getAllUsers = async () => {
    let page = 2;
    let perPage = 4;
    let skip = (page - 1) * perPage;

    const users = await prisma.user.findMany({
        skip: skip,
        take: 2,
        // where: {
        //     OR: [
        //         {
        //             email: {
        //                 endsWith: '@hotmail.com',
        //             },
        //         },

        //         {
        //             email: {
        //                 endsWith: '@gmail.com',
        //             },
        //         },
        //     ],
        //     posts: {
        //         some: {
        //             title: {
        //                 startsWith: 'Titulo',
        //             },
        //         },
        //     },
        // },
        // orderBy: [{ name: 'asc' }, { id: 'asc' }],
        // select: {
        //     id: true,
        //     name: true,
        //     email: true,
        //     status: true,
        //     posts: {
        //         where: {},
        //         select: {
        //             id: true,
        //             title: true,
        //         },
        //     },
        //     _count: {
        //         select: {
        //             posts: true,
        //         },
        //     },
        // },
    });
    return users;
};

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
        select: {
            id: true,
            name: true,
        },
    });
    return user;
};

export const updateUser = async () => {
    const updateUser = await prisma.user.updateMany({
        where: {
            email: {
                endsWith: '@hotmail.com',
            },
        },
        data: {
            status: false,
        },
    });

    return updateUser;
};

export const deleteUser = async () => {
    try {
        const deletedUser = await prisma.user.delete({
            where: { email: 'testador.massunari@gmail.com' },
        });
        return deletedUser;
    } catch (error) {
        return null; // ou trate o erro conforme necessário
    }
};
