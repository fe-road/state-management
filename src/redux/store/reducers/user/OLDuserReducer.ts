import { UserModel } from '../../../models/UserModel';
import { getUser } from '../../../services/userService';
import { UserActionTypes } from './OLDuserActions';
import { SET_NAME, SET_AGE } from './OLDuserTypes';

const initialState: UserModel = getUser();

export const userReducer = (state = initialState, action: UserActionTypes) => {
    switch(action.type) {
        case SET_NAME: return {
            ...state,
            name: action.payload,
        };
        case SET_AGE: return {
            ...state,
            age: action.payload,
        };
        default: return state;
    }
};
