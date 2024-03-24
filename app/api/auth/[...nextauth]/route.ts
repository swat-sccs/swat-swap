import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const handler = NextAuth({
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
      if (session?.user) {
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
  /*callbacks: {
       jwt({ token, user }) {
         if(user) token.role = user.role
         return token
       },
       session({ session, token }) {
         if (session && session.user) {
           // @ts-ignore
           session.user.role = token.role
         }
         return session
       }
     }*/
});

export { handler as GET, handler as POST };
