import { useMemo } from 'react';
import './App.css'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import { UserContext } from './contexts/UserContext';
import { getUser } from './services/userService';

const App = () => {
    const user = useMemo(getUser, []);

    return (
        <UserContext.Provider value={user}>
            <Header />
            <ProfileCard />
        </UserContext.Provider>
    );
};

export default App;
