import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username:", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify credentials supplied in `credentials`.
        // You can do that from the database, or here using as API call,
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "1", name: "John Smith", password: "auth" }

        return credentials?.username === user.name &&
          credentials?.password === user.password
          ? user
          : null
      },
    }),
  ],
  pages: {},
}
