import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import bcrypt from 'bcrypt'

import User from '@models/user'
import {connectToDB} from '@utils/database'

const handler = NextAuth({
    providers : [
        GoogleProvider({
            client: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            
        })
    ],

    // To Keep the session secure and running
    async session({session}){
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session;
        
    },


    // Sign In Functionality
    async signIn({profile}){
        try {
            await connectToDB()
    
            // Check if a user already exists
            const userExists = await User.findOne({
                email: profile.email
            })
            // If not, create a new User
            if(!userExists){

                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ","").toLowerCase(),
                    image: profile.picture
                })
                
            }
    
            return true
        } catch (error) {
            console.log("Error Occured : "+error);
            return false
        }
    },
    
})

export {handler as GET, handler as POST}