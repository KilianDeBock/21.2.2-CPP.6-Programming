import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    (async () => {
      if (loggedIn !== null)
        await AsyncStorage.setItem("@logged_In", loggedIn.toString());
    })();
  }, [loggedIn]);

  useEffect(() => {
    (async () => {
      const _loggedIn = await AsyncStorage.getItem("@logged_In");
      setLoggedIn(_loggedIn === "true");
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
