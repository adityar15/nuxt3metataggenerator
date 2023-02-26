import firebaseServer from "../utils/firebaseServer"
import {getAuth} from "firebase-admin/auth"

export default defineEventHandler(async(event) => {
    firebaseServer()
    const {token} = await readBody(event)

    const expiresIn = 60 * 60 * 24 * 5 * 1000; 

    try{
        const options = {
            maxAge: expiresIn,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        }
    
        const authCookie = await getAuth().createSessionCookie(token, {expiresIn})
    
        setCookie(event, 'authCookie', authCookie,options)

        return {
            statusCode: 200,
            message: "Auth successful"
        }
    }
    catch(err){
        throw createError({statusCode: 401, statusMessage: "Unauthorized"})
    }
   
})