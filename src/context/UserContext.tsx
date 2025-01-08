import  { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  userEmail: string;
  setUserEmail: (email: string) => void;
  clearUserEmail: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userEmail, setUserEmail] = useState('');

  const clearUserEmail = () => {
    setUserEmail('');
  };

  return (
    <UserContext.Provider
      value={{
        userEmail,
        setUserEmail,
        clearUserEmail,
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