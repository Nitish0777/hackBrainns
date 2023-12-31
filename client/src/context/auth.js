import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    console.log("data", data);
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: parsedData.user,
        token: parsedData.token,
      }));
      axios.defaults.headers.common["Authorization"] = parsedData.token;
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
