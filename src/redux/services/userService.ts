import { UserModel } from '../models/UserModel';

export const getUser = (): UserModel => {
    return {
        name: 'Phellipe',
        age: 31,
        profession: 'Developer',
    };
};