import { Provider } from 'react-redux';

import store from './store/store';

import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import TaskList from './components/TaskList';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <ProfileCard />
            <TaskList />
        </Provider>
    );
};

export default App;
