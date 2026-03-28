"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { GithubAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  function gitHubSignIn() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function firebaseSignOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}