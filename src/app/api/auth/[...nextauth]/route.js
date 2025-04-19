import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/User"; // Assuming you have a User model
import bcrypt from "bcryptjs";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isMatch) return null;

        return { id: user._id, name: user.name, email: user.email };
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/auth", // your custom sign-in page
  },
});

export { handler as GET, handler as POST };
