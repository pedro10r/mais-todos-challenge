import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import * as auth from '../../services/mock-api-auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<object | null>(null);

  
  async function signIn(email: string, password: string) {
    const userEmail = 'teste@teste.com';
    const userPassword = '123';

    if (email === userEmail && password === userPassword) {
      const response = await auth.signIn();

      setUser(response.user);
    } else {
      Alert.alert(
        "Usuário inválido",
        "Entre com o email e senha de teste",
        [
          { text: "OK", onPress: () => {}}
        ]
      );
    }
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
