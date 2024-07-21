import NextAuthProvider from "./NextAuthProvider";
import TanstackQueryClientProvider from "./TanstackQueryProvider";
import NavBar from "@/components/Navbar";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <TanstackQueryClientProvider>
            <MantineProvider>
              <div className="flex flex-col gap-y-4 h-screen">
                <NavBar />
                {children}
              </div>
            </MantineProvider>
          </TanstackQueryClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
