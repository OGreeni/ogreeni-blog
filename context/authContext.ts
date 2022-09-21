import { AppContext } from 'next/app';
import { createContext } from 'react';

interface AppContextInterface {
  loggedIn: boolean;
  email: null | string;
}

const defaultUser = { loggedIn: false, email: null };

export const UserContext = createContext<AppContextInterface | null>(
  defaultUser
);
export const UserProvider = UserContext.Provider;
