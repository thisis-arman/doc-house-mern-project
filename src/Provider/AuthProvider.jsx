import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { createContext } from "react";
import { useState } from "react";

const auth = getAuth(app);
const AuthContext = createContext(null);

const AuthProvider = () => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createUser,
    loading,
    signIn,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}></AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
