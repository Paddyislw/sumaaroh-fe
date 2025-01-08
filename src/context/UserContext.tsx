import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  userEmail: string;
  userName: string;
  setUserEmail: (email: string) => void;
  setUserName: (name: string) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const clearUser = () => {
    setUserEmail('');
    setUserName('');
  };

  return (
    <UserContext.Provider
      value={{
        userEmail,
        userName,
        setUserEmail,
        setUserName,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}