import NextAuth from "next-auth";
import LinkedIn from "next-auth/providers/linkedin";

const SIGN_IN_URL = "/auth/signin";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    LinkedIn({
      clientId: process.env.AUTH_LINKEDIN_ID,
      clientSecret: process.env.AUTH_LINKEDIN_SECRET,
      authorization: {
        params: {
          scope: "openid profile email"
        }
      }
    })
  ],
  pages: {
    signIn: SIGN_IN_URL // Custom sign-in page
  },
  secret: process.env.AUTH_SECRET
});
