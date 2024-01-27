import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import {connectToDB} from '@utils/database'

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
        try {
            await connectToDB()
    
            // Check if a user already exists
            // If not, create a new User
    
            return true
        } catch (error) {
            console.log("Error Occured : "+error);
            return false
        }
    },
    
})

export {handler as GET, handler as POST}