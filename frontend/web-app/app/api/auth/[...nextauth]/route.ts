import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth"
// import DuendeIdentityServer6 from "next-auth/providers/duende-identity-server6";




const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };