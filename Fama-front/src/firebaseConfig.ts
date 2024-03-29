import * as firebase from 'firebase/app'
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import 'firebase/firestore'
import { useState } from 'react';

const config = {
  apiKey: "AIzaSyDknGkCaS7VpaImfBFwEU5-DcfDkhmcDrg",
  authDomain: "pagina-fama.firebaseapp.com",
  projectId: "pagina-fama",
  storageBucket: "pagina-fama.appspot.com",
  messagingSenderId: "534481610213",
  appId: "1:534481610213:web:ff392bfff1dc0a7bfdbb0c",
  measurementId: "G-QFWLL8Q7WJ"

}

firebase.initializeApp(config)

const auth = getAuth()
export async function loginUser(nome: string, senha: string) {
    const email = `$(nome)@codedamn.com`
    try{

        const res = await signInWithEmailAndPassword(auth, email, senha)

        console.log(res)
        return true
    }
        catch(error){
            console.log(error)
            return false
        }
    
}
