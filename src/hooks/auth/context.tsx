import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

import * as auth from '../../services/mock/api-auth';
import { userTestDefault } from '../../services/mock/model-user';

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
    if (email === userTestDefault.email && password === userTestDefault.password) {
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
