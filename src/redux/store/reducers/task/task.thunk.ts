import { Dispatch } from 'redux';
import { setData, setError, startLoadingState, TaskState } from './taskSlice';

export const fetchTasks = () => {
    return async (dispatch: Dispatch) => {
        dispatch(startLoadingState());

        try {
            // throw new Error();
            setTimeout(() => {
                // const response = await fetch('https://sample-api/tasks');
                // const data = response.json();
                const data: TaskState = {
                    completed: [
                        { title: 'Task Completed 1' },
                        { title: 'Task Completed 2' },
                    ],
                    onGoing: [
                        { title: 'Task In Progress 1' },
                        { title: 'Task In Progress 2' },
                        { title: 'Task In Progress 3' },
                    ],
                }
                
                dispatch(setData(data));
            }, 2000);
        } catch (error) {
            dispatch(setError('fetching from API'));
        }
    };
};