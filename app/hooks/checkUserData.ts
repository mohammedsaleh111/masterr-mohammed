// hooks/useUserData.js
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";



const checkUserData = () => {

    const [userExists, setUserExists] = useState(false);

    const { user } = useAuth();


    useEffect(() => {
        const checkUserData = async () => {
            if (user) {
                const userRef = collection(db, "users");
                const q = query(userRef, where("userId", "==", user.uid));
                const querySnapshot = await getDocs(q);
                setUserExists(!querySnapshot.empty);
            }
        };

        checkUserData();
    }, [user]);


    return userExists;
};

export default checkUserData;
