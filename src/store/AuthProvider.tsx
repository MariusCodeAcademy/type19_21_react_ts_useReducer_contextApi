import { createContext } from 'react';

type CtxType = {
  login: (email: string) => void;
  logout: () => void;
  email: string;
};

export const AuthContext = createContext({
  login(email: string) {},
  logout() {},
  email: '',
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  function login() {
    console.log('login ===');
  }

  function logout() {
    //
  }

  const contextValue: CtxType = {
    login,
    logout,
    email: '',
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
