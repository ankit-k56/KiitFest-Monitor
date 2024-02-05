import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/server/db";


export const authOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials) {
        const { email } = credentials;

        if (!email) {
          throw new Error("Email is required");
        }

        let user;
        try {
          user = await db.user.findUnique({
            where: {
              email: email,
            },
          });
        } catch (_err) {
          throw new Error("Something went wrong. Please try again.");
        }

        if (!user) {
          throw new Error("User not found. Please Register.");
        }


        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};


