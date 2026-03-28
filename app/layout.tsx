import "./globals.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}