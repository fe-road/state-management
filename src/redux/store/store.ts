import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './task/taskSlice';
import userReducer from './user/userSlice';

const store = configureStore({
    reducer: {
        task: taskReducer,
        user: userReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;