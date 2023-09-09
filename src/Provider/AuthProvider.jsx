import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const googleProver = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProver)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log('logged in User inside the auth state Observer')
      setUser(loggedUser)
      setLoading(false)
      if (loggedUser) {
        axios.post('http://localhost:5000/jwt', { email: loggedUser.email })
          .then(data => {
            localStorage.setItem('access_token', data.data.token)
            console.log(data)
          })
      }
      else {
        localStorage.removeItem('access_token')
      }
    });
    return () => {
      unsubscribe()
    };
  }, [])



  const authInfo = {
    user,
    createUser,
    loading,
    signIn,
    LogOut,
    handleGoogleLogin,
    updateUserProfile
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
