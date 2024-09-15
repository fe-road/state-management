import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <ProfileCard />
        </Provider>
    );
};

export default App;
