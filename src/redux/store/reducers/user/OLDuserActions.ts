import { SET_NAME, SET_AGE } from './OLDuserTypes';

type SetNameType = {
    type: typeof SET_NAME;
    payload: string;
}

type SetAgeType = {
    type: typeof SET_AGE;
    payload: number;
}

export const setName = (name: string): SetNameType => ({
    type: SET_NAME,
    payload: name,
});

export const setAge = (age: number): SetAgeType => ({
    type: SET_AGE,
    payload: age,
});

export type UserActionTypes = SetNameType | SetAgeType;