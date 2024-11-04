// hooks/useUserData.js
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";



const checkReviewData = () => {

    const [reviewExists, setReviewExists] = useState(false);

    const { user } = useAuth();

    useEffect(() => {
        const checkReviewData = async () => {
            if (user) {
                const userRef = doc(db, "reviews", user.uid);
                const userDoc = await getDoc(userRef);
                setReviewExists(userDoc.exists());
            }
        };

        checkReviewData();
    }, [user]);

    return reviewExists;
};

export default checkReviewData;
