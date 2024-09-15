import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskModel } from '../../../models/TaskModel';

export interface TaskState {
    isLoading?: boolean;
    error?: string | null;
    completed: Array<TaskModel>;
    onGoing: Array<TaskModel>;
}

const initialState: TaskState = {
    isLoading: false,
    error: null,
    completed: [],
    onGoing: [],
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<TaskState>) => {
            state.completed = action.payload.completed;
            state.onGoing = action.payload.onGoing;
            state.isLoading = false;
            state.error = null;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        startLoadingState: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        addTask: (state, action: PayloadAction<TaskModel>) => {
            state.onGoing.push(action.payload);
        },
    },
});

export const { setData, setError, startLoadingState, addTask } = taskSlice.actions;

export default taskSlice.reducer;