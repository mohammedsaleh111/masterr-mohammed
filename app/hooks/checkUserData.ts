// hooks/useUserData.js
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";



const checkUserData = () => {

    const [userExists, setUserExists] = useState(false);
    const [reviewExists, setReviewExists] = useState(false);

    const { user, signInWithGoogle } = useAuth();


    useEffect(() => {
        const checkUserData = async () => {
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userRef);
                setUserExists(userDoc.exists());
            }
        };

        checkUserData();
    }, [user]);

    useEffect(() => {
        const checkUserReview = async () => {
            if (user) {
                const userRef = doc(db, "reviews", user.uid);
                const userDoc = await getDoc(userRef);
                setUserExists(userDoc.exists());
            }
        };

        checkUserReview();
    }, [user]);

    return {userExists ,reviewExists};
};

export default checkUserData;
