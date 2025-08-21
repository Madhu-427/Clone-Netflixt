import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword,
    signOut} from 'firebase/auth'
import {setDoc, doc, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBUbbwrAZJwJazXValyqMx3J7k003McR0Q",
  authDomain: "netflix-clone-fdeca.firebaseapp.com",
  projectId: "netflix-clone-fdeca",
  storageBucket: "netflix-clone-fdeca.firebasestorage.app",
  messagingSenderId: "193405009378",
  appId: "1:193405009378:web:cd9380a088d2e540524dbb",
  measurementId: "G-S99ZV5QT4T"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password)=>{
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "user", user.uid), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.error("Error signing up:", error);
       toast.error(error.code.split("/")[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch (error){
        console.log(error)
        toast.error(error.code.split("/")[1].split('-').join(" "))
    }
}

const logout = async()=>{
   await signOut(auth)
}

export {auth, db, signup, login, logout}