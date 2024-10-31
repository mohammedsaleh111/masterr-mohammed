// hooks/useAuth.ts
import { SetStateAction, useEffect, useState } from "react";
import { auth, googleProvider } from "../../lib/firebase";
import { User, signInWithPopup,signInWithRedirect } from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  // مراقبة حالة تسجيل الدخول
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser: SetStateAction<User | null>) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // إلغاء الاشتراك عند التخلص من العنصر
  }, []);

  // دالة لتسجيل الدخول باستخدام جوجل
  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return { user, signInWithGoogle };
}
