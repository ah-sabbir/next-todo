import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import credentials from "next-auth/providers/credentials"
 
import { User, NextAuthConfig } from "next-auth"

export const BASE_PATH = "/api/auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [credentials({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "test1"},
      password: {label: "Password", type: "password", placeholder: "12345"}
    },
    async authorize(credentials):Promise<User | null>{
      const users = [
        {
          id: ";lakdfsdfoikj",
          username: "test1",
          name: "test user -1 ",
          password: "12345",
          email: "test@gmail.com"
        }
      ]
      // console.log(users);
      const user = users.filter((user)=> user?.username === credentials?.username)[0]
      // const user = users.find(
      //   (user)=>{
      //     user.username === credentials.username &&
      //     user.password === credentials.password
      //   }
      // );
      // console.log(user);
      return user;
      // return user? {id: user.id, name: user.name, email: user.email} : null;
    }
  })],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET
})