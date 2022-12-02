import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [username, setUsername] = useState(null);
  const [isInitialised, setIsInitialised] = useState(false);

  useEffect(() => {
    (async () => {
      if (username !== null) {
        await AsyncStorage.setItem("@username", username.toString());
      }
    })();
  }, [username]);

  useEffect(() => {
    (async () => {
      const _username = await AsyncStorage.getItem("@username");
      setUsername(_username);
      setIsInitialised(true);
    })();
  }, []);

  const login = async (username = null) => {
    if (username && username.length > 0) {
      setUsername(username);
    }
  };

  const logout = async () => {
    setUsername("");
  };

  const loggedIn = username && username.length > 0;

  if (!isInitialised) {
    return null;
  }

  return (
      <AuthContext.Provider
          value={{
            username,
            login,
            logout,
            loggedIn,
          }}
      >
        {children}
      </AuthContext.Provider>
  );
};
