import Credentials from "next-auth/providers/credentials"
import { Login } from "./MongoDbConnect"
import GoogleProvider from "next-auth/providers/google"
import mongoose from "mongoose"
import { connect } from "./Connection"
export const authOptions = {
    session: {
        strategy: "jwt",
        maxAge: 2 * 24 * 60 * 60,
    },
    providers: [
        Credentials({
            type: "credentials",
            credentials: {
                email: {
                    label: "EMail",
                    type: "email",
                    placeholder: "enter your email"
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "enter your password",
                }
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                console.log(email)
                await connect();
                const user = await Login.findOne({ "email": email })
                console.log(user);
                if (!user || user?.length == 0) {
                    const usermake = await Login.create({
                        email: email,
                        password: password,
                    });

                    return usermake;
                }
                else {
                    return user;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                  prompt : 'login'
                }
              }
        
        })

    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(1);
            if (account.provider === 'google') {
                try {
                    console.log("hii");
                    const { name, email } = profile;
                    await connect();
                    const user = await Login.find({ email: email });
                    console.log(user);
                    if (user.length == 0) {
                        var usermake = await Login.create({
                            email: email,
                            name: name,
                            image: profile.picture
                        });
                        return usermake
                    }
                    return user;
                } catch (e) {
                    console.log(e);
                }
            }
            else {
                return user;

            }
        },
        async signOut({ account, profile, ...rest }) {
            // Add sign-out logic here
            console.log("Signing out user:", profile.email);
            return Promise.resolve();
        },
        async session({ session }) {
            return session;
        }
    }
}