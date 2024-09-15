import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { useState } from 'react';
import { setAge, setName } from '../store/reducers/user/userSlice';

const ProfileCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [newName, setNewName] = useState('');

    const name: string = useSelector((state: RootState) => state.user.name);
    const age: number = useSelector((state: RootState) => state.user.age);
    const profession: string = useSelector((state: RootState) => state.user.profession);

    const saveName = (): void => {
        dispatch(setName(newName));
        setNewName('');  
    };

    const getOlder = (): void => {
        dispatch(setAge(age + 1));
    };
    
    return (
        <div>
            <p>{name} - {age} - {profession}</p>
            <div>
                <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />
                <button onClick={saveName}>Save Name</button>
            </div>
            <div>
                <button onClick={getOlder}>Get Older</button>
            </div>
        </div>
    );
};

export default ProfileCard;