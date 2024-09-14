import { useMemo } from 'react';
import './App.css'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import { getUser } from './services/userService';

const App = () => {
    const user = useMemo(getUser, []);

    return (
        <>
            <p>Oh no! We don't know how to deal with the user!</p>
            {/* <Header />
            <ProfileCard /> */}
        </>
    );
};

export default App;
