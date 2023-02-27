import {auth} from "../../globals/firebase";


var promise;

export default class FirebaseService {

    async login(data) {

        promise = await auth.signInWithEmailAndPassword(auth.getAuth(), data.email, data.password);

        return promise;
    }
    async google(){
        const provider = new auth.GoogleAuthProvider();


        promise = await auth.signInWithPopup(auth.getAuth(), provider);

        return promise;
    }

    async password_reset(email){
        promise = await auth.sendPasswordResetEmail(auth.getAuth(), email);

        return promise;
    }

    async register(data) {

        promise = await auth.createUserWithEmailAndPassword(auth.getAuth(), data.email, data.password);

        return promise;
    }

    async update(data) {

        promise = await auth.updateProfile(auth.getAuth().currentUser,data);

        return promise;
    }
}

export const firebaseService = new FirebaseService();
