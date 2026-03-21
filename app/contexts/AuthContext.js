"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import {
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Prevent SSR crash
  useEffect(() => {
    if (typeof window === "undefined" || !auth) return;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // GitHub Login
  async function gitHubSignIn() {
    if (!auth) return;

    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }

  // Logout
  async function firebaseSignOut() {
    if (!auth) return;

    return signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
export function useUserAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useUserAuth must be used inside AuthContextProvider");
  }

  return context;
}