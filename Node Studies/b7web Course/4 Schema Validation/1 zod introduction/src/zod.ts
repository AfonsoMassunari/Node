import z from 'zod';

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120),
});

let data = {
    name: 'afonso',
    email: 'support@b7web.com.br',
    age: 22,
};

const result = schema.safeParse(data);
console.log(result);
