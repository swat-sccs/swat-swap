import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import NextAuthProvider from "./NextAuthProvider";
import NavBar from "@/components/Navbar";
import "./globals.css";
import TanstackQueryClientProvider from "@/components/TanstackQueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-full">
        <NextAuthProvider>
          <TanstackQueryClientProvider>
            <AppRouterCacheProvider>
              <div className="flex flex-col w-full h-screen">
                <NavBar />
                {children}
              </div>
            </AppRouterCacheProvider>
          </TanstackQueryClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
