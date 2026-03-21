"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week9HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔥 Week 9 Firebase Auth</h1>

      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
        >
          Login with GitHub
        </button>
      ) : (
        <div className="space-y-3">
          <p>
            Welcome, <span className="font-bold">{user.email}</span>
          </p>

          <Link
            href="/week-9/shopping-list"
            className="underline text-blue-400"
          >
            Go to Shopping List
          </Link>

          <br />

          <button
            onClick={firebaseSignOut}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </main>
  );
}