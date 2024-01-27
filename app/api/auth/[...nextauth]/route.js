import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


const handler = NextAuth({
    providers : [
        GoogleProvider({
            client: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            
        })
    ],

    async session({session}){

    },

    async signIn({profile}){

    },
    
})

export {handler as GET, handler as POST}