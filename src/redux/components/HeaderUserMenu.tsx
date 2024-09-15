import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const HeaderUserMenu = () => {
    const name: string = useSelector((state: RootState) => state.user.name);

    return (
        <div>
            <span>Logged in user: {name}</span>
        </div>
    );
};

export default HeaderUserMenu;