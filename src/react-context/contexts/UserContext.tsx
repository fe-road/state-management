import { createContext } from 'react';
import { getUser } from '../services/userService';

export const UserContext = createContext(getUser());