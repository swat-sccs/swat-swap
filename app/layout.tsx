import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/app/ThemeRegistry";
import TanstackQueryClientProvider from "@/components/TanstackQueryProvider";
import { NextAuthProvider } from "./NextAuthProvider";
import { getServerSession } from "next-auth";
import NavBar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <NextAuthProvider session={session}>
      <ThemeRegistry options={{ key: "mui" }}>
        <TanstackQueryClientProvider>
          <html lang="en">
            <body className="max-h-full">
              <NavBar />
              {children}
            </body>
          </html>
        </TanstackQueryClientProvider>
      </ThemeRegistry>
    </NextAuthProvider>
  );
}
