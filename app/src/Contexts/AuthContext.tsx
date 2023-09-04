import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext(
  {} as {
    authToken: string;
    setAuthToken: React.Dispatch<React.SetStateAction<string>>;
    loggedUser: boolean;
    setLoggedUser: React.Dispatch<React.SetStateAction<boolean>>;
    userType: string;
    setUserType: React.Dispatch<React.SetStateAction<string>>;
  }
);

const AuthProvider = ({ children }: Props) => {
  const [authToken, setAuthToken] = useState<string>("");
  const [loggedUser, setLoggedUser] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        loggedUser,
        setLoggedUser,
        userType,
        setUserType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
