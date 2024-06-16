import { findOrCreateUser } from "@/app/actions";
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
    session: async ({ session, token }) => {
      if (session && token && token.uid) {
        session.user.id = token.uid.toString();
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        // NOTE: user.id is the keycloak id
        const actualUserId = await findOrCreateUser(user.id);
        token.uid = actualUserId;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
