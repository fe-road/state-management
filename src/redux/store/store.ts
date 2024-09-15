import { configureStore } from '@reduxjs/toolkit';

import { logMiddleware } from './middlewares/logMiddleware';

import taskReducer from './reducers/task/taskSlice';
import userReducer from './reducers/user/userSlice';

const store = configureStore({
    reducer: {
        task: taskReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;