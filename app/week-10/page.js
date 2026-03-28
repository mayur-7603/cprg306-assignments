"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week10HomePage() {
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  async function handleLogin() {
    try {
      await gitHubSignIn();
      router.push("/week-10/shopping-list");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Week 10 Firestore Database</h1>

      {!user ? (
        <div className="space-y-4">
          <p className="text-gray-300">
            Login to access the protected shopping list.
          </p>

          <button
            onClick={handleLogin}
            className="bg-white text-black px-4 py-2 rounded font-medium"
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p>
            Welcome, <span className="font-bold">{user.email}</span>
          </p>

          <Link
            href="/week-10/shopping-list"
            className="underline text-blue-400"
          >
            Go to Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}