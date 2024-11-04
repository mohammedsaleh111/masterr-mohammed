import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDocs, query, collection, where } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";

const checkReviewData = () => {
    const [reviewExists, setReviewExists] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const checkReviewData = async () => {
            if (user) {
                const reviewsCollection = collection(db, "reviews");
                // البحث عن مستندات تحتوي على userUid تطابق user.uid الحالي
                const q = query(reviewsCollection, where("userUid", "==", user.uid));
                const querySnapshot = await getDocs(q);
                setReviewExists(!querySnapshot.empty); // إذا كان هناك مستند موجود، فهذا يعني أن المستخدم قد قدم تعليقًا بالفعل
            }
        };

        checkReviewData();
    }, [user]);

    return reviewExists;
};

export default checkReviewData;
