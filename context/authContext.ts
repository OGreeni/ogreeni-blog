import { createContext } from 'react';

const defaultUser = { loggedIn: false, email: null };

export const UserContext = createContext(defaultUser);
export const UserProvider = UserContext.Provider;
