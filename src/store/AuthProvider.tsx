import { createContext, useContext } from 'react';

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
  // 1. Sukurti email state

  // 2. prisiloginant irasyti email i state

  // 3. atsiloginant istrinti email is state

  function login(email: string) {
    console.log('login user ===', email);
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

// custom context hook

export function useAuthCtx() {
  return useContext(AuthContext);
}
