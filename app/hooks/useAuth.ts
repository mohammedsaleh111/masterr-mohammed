// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { auth, googleProvider } from "../../lib/firebase";
import { signInWithPopup } from "firebase/auth";

export function useAuth() {
  interface User {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    // أي خصائص أخرى تريد إضافتها
  }

  const [user, setUser] = useState<User | null>(null);


  // مراقبة حالة تسجيل الدخول
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // إلغاء الاشتراك عند التخلص من العنصر
  }, []);

  // دالة لتسجيل الدخول باستخدام جوجل
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return { user, signInWithGoogle, auth };
}
