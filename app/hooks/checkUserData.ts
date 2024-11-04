// hooks/useUserData.js
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";



const checkUserData = () => {

    const [userExists, setUserExists] = useState(false);

    const { user } = useAuth();


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


    return userExists;
};

export default checkUserData;
