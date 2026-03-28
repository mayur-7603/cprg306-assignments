"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleLogin() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  async function handleLogout() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <nav className="bg-gray-950 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-white font-bold text-lg">
          CPRG 306
        </Link>

        <Link href="/week-10" className="text-blue-400 hover:underline text-sm">
          Week 10
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            <span className="text-sm text-gray-300">
              {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-white text-black px-3 py-2 rounded text-sm font-medium"
          >
            Login with GitHub
          </button>
        )}
      </div>
    </nav>
  );
}