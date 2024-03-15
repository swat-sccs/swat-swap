import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "./NextAuthProvider";
import ThemeRegistry from "@/app/ThemeRegistry";
import SCCSNavBar from "@/components/SCCSNavBar";
import TanstackQueryClientProvider from "@/components/TanstackQueryProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <ThemeRegistry options={{ key: "mui" }}>
        <TanstackQueryClientProvider>
          <html lang="en">
            <body className="max-h-full">
              <SCCSNavBar></SCCSNavBar>
              {children}
            </body>
          </html>
        </TanstackQueryClientProvider>
      </ThemeRegistry>
    </NextAuthProvider>
  );
}
