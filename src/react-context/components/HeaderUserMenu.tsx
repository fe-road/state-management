import { useContext } from 'react';
import { UserModel } from '../models/UserModel';
import { UserContext } from '../contexts/UserContext';

const HeaderUserMenu = () => {
    const user: UserModel = useContext(UserContext);

    return (
        <div>
            <span>Logged in user: {user.name}</span>
        </div>
    );
};

export default HeaderUserMenu;