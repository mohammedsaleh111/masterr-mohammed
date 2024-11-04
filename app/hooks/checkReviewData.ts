import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "./useAuth";

const checkReviewData = () => {
    const [reviewExists, setReviewExists] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const checkReviewData = async () => {
            if (user) {
                const reviewsCollection = collection(db, "reviews");
                const q = query(reviewsCollection, where("userUid", "==", user.uid));
                const querySnapshot = await getDocs(q);
                setReviewExists(!querySnapshot.empty);
            }
        };

        checkReviewData();
    }, [user]);

    return reviewExists;
};

export default checkReviewData;
