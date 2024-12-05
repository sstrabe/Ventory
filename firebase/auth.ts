import { GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, updatePassword } from "firebase/auth";
import { auth } from "./firebase";

export const signInWithEP = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithRedirect(auth, provider);

    return result;
};

export const signOut = () => {
    return auth.signOut()
}

export const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
}

export const changePassword = (password: string) => {
    if (!auth.currentUser) return

    return updatePassword(auth.currentUser, password)
}