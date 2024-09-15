import { Middleware } from 'redux';

export const logMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    console.log('Action Dispatched:', action);

    const result = next(action);

    console.log('Next state:', storeAPI.getState());

    return result;
};