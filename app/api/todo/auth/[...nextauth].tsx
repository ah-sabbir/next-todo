import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import jwt from "jsonwebtoken";

// export const authOptions: NextAuthOptions = {
//   providers: [...],
//   jwt: {
//     async encode({ secret, token }) {
//       return jwt.sign(token, secret)
//     },
//     async decode({ secret, token }) {
//       return jwt.verify(token, secret)
//     },
//   },
// }

// export default NextAuth(authOptions)