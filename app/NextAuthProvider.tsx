"use client" // SessionProvider needs to wrap around a client component to be used in layout.tsx, cannot be used directly in layout.tsx
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type Props = {
    children?: React.ReactNode;
    session?: Session | null;
};

export const NextAuthProvider = ({ session, children }: Props) => {
    return <SessionProvider session={session}>{children}</SessionProvider>;
};
