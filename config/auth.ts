import { getOrCreateUser } from "@/app/actions";
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
        };
      },
      clientId: process.env.KEYCLOAK_ID || "",
      clientSecret: process.env.KEYCLOAK_SECRET || "",
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session && token && token.uid) {
        session.user.id = token.uid.toString();
      }
      return session;
    },
    signIn: async ({ user }) => {
      if (!user.id) {
        return false;
      }
      return true;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        // NOTE: user.id is the keycloak id
        const actualUserId = await getOrCreateUser({
          keycloakId: user.id,
          email: user.email ?? "",
          name: user.name ?? "",
        });
        token.uid = actualUserId;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
