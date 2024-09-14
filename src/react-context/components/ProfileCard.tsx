import { useContext } from 'react';
import { UserModel } from '../models/UserModel';
import { UserContext } from '../contexts/UserContext';

const ProfileCard = () => {
    const user: UserModel = useContext(UserContext);
    
    return (
        <div>
            <p>{user.name} - {user.age} - {user.profession}</p>
        </div>
    );
};

export default ProfileCard;