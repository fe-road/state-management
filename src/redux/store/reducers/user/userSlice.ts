import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUser } from '../../../services/userService';

const userSlice = createSlice({
    name: 'user',
    initialState: getUser(),
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setAge: (state, action: PayloadAction<number>) => {
            state.age = action.payload;
        },
    },
});

export const { setName, setAge } = userSlice.actions;

export default userSlice.reducer;