import { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
    providers: [
        KeycloakProvider({
            profile(profile, tokens) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,

                    //role: profile.groups.find((group: string) => group==="admin") || "user",
                };
            },
            clientId: process.env.KEYCLOAK_ID || "",
            clientSecret: process.env.KEYCLOAK_SECRET || "",
            issuer: process.env.KEYCLOAK_ISSUER,
        }),
    ],
    callbacks: {
        session: async ({ session, token, user }) => {
            if (session) {
                session.user.id = token.sub;
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
    },
    session: {
        strategy: 'jwt',
    },
}