import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/reducers/task/task.thunk';
import { AppDispatch, RootState } from '../store/store';

const TaskList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isLoading = useSelector((state: RootState) => state.task.isLoading);
    const error = useSelector((state: RootState) => state.task.error);
    const completedTasks = useSelector((state: RootState) => state.task.completed);
    const onGoingTasks = useSelector((state: RootState) => state.task.onGoing);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (error) {
        return <h6>Error loading Task list: {error}</h6>;
    }

    return (
        <>
            <h4>Task List</h4>
            {isLoading ? (
                <p>Loading...</p>
            ): (
                <>
                    <h5>Completed</h5>
                    <ul>
                        {completedTasks.map((item) => <li key={item.title}>{item.title}</li>)}
                    </ul>
                    <h5>On Going</h5>
                    <ul>
                        {onGoingTasks.map((item) => <li key={item.title}>{item.title}</li>)}
                    </ul>
                </>
            )}
        </>
    );
};

export default TaskList;