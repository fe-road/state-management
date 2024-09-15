import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskModel } from '../../models/TaskModel';

interface TaskState {
    completed: Array<TaskModel>;
    onGoing: Array<TaskModel>;
}

const initialState: TaskState = {
    completed: [],
    onGoing: [],
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskModel>) => {
            state.onGoing.push(action.payload);
        },
    },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;