"use client";
import { useState, useEffect } from "react";
import { db, auth, googleProvider } from "/lib/firebase"; // تأكد من إعداد firebaseConfig بشكل صحيح
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import emailjs from 'emailjs-com';

const RegistrationPage = () => {

  const [formData, setFormData] = useState({
    goal: "",
    age: "",
    gender: "",
    activityLevel: "",
    userPhone: "",
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
        });
        console.log("تم تسجيل الدخول:", currentUser);
      } else {
        setUser(null);
        console.log("لم يتم تسجيل الدخول.");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("تسجيل الدخول تم بنجاح.");
    } catch (error) {
      console.error("خطأ أثناء تسجيل الدخول:", error);
      alert("حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("تحديث البيانات:", { ...formData, [name]: value });
  };

  const sendEmailToTrainer = async () => {
    try {
      const templateParams = {
        userName: user.name,
        userEmail: user.email,
        userPhone: formData.userPhone,
        exerciseName: formData.exerciseName,
        exercisePrice: formData.exercisePrice,
        goal: formData.goal,
        paymentMethod: formData.paymentMethod,
        age: formData.age,
        gender: formData.gender,
        activityLevel: formData.activityLevel,
      };

      const response = await emailjs.send(
        'service_3kz71eb',     // استبدلها بمعرف الخدمة الخاص بك
        'template_2fafnpo',    // استبدلها بمعرف القالب الخاص بك
        templateParams,
        'XNb6U8l6Pb57-H3K9',
      );

      alert("تم إرسال البريد الإلكتروني بنجاح!");
    } catch (error) {
      console.error("خطأ أثناء إرسال البريد الإلكتروني:", error);
      alert("فشل في إرسال البريد الإلكتروني.");
    }
  };


  const submitForm = async () => {
    console.log("التحقق من المستخدم قبل الإرسال:", user);
    try {
      if (!user) {
        alert("يرجى تسجيل الدخول أولاً.");
        return;
      }

      const userRef = doc(db, "users", user.id);
      const userDoc = await getDoc(userRef);

      // إذا لم يكن هناك مستند للمستخدم، قم بإنشائه
      if (!userDoc.exists()) {
        await setDoc(userRef, {
          name: user.name,
          email: user.email,
          userPhone: formData.userPhone,
          age: formData.age,
          gender: formData.gender,
          activityLevel: formData.activityLevel,
          goal: formData.goal,
        });
      }

      await sendEmailToTrainer();

      // إضافة تمرين كمجموعة فرعية داخل مستند المستخدم
      const exercisesRef = collection(userRef, "purchasedExercises");
      await addDoc(exercisesRef, {
        exerciseName: exerciseName,
        exercisePrice: exercisePrice,
        purchaseDate: new Date().toISOString(),
        paymentMethod: formData.paymentMethod,
      });

      alert("تم شراء التمرين بنجاح!");
    } catch (error) {
      console.error("خطأ أثناء حفظ بيانات التمرين:", error);
      alert("حدث خطأ. حاول مرة أخرى.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("تم تقديم النموذج:", formData);
    if (formData.paymentMethod === "orangeCash") {
      alert("يرجى إرسال ثمن التمرين إلى رقم المدرب بعد التواصل معه.");
      submitForm();
    } else if (formData.paymentMethod === "creditCard") {
      const confirmed = confirm("هل تريد إتمام الدفع عبر الكارت؟");
      if (confirmed) {
        alert("تمت عملية الدفع بنجاح.");
        submitForm();
      } else {
        alert("تم إلغاء الدفع.");
      }
    }
  };

  if (!user) {
    return (
      <div>
        <h2>يرجى تسجيل الدخول باستخدام Google للوصول إلى النموذج</h2>
        <button onClick={handleSignIn}>تسجيل الدخول باستخدام Google</button>
      </div>
    );
  }

  return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">تسجيل شراء تمرين</h2>
          <p className="text-gray-700">الاسم: {user.name}</p>
          <p className="text-gray-700">البريد الإلكتروني: {user.email}</p>
          <p className="text-gray-700">اسم التمرين: {exerciseName}</p>
          <p className="text-gray-700">ثمن التمرين: ${exercisePrice}</p>
    
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="mt-4">الهدف من التمرين:</label>
            <input
              type="text"
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-2 rounded-md"
            />
    
            <label className="mt-4">العمر:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-2 rounded-md"
            />
    
            <label className="mt-4">رقم الواتس:</label>
            <input
              type="number"
              name="userPhone"
              value={formData.userPhone}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-2 rounded-md"
            />
    
            <label className="mt-4">الجنس:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="">اختر</option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
    
            <label className="mt-4">مستوى النشاط:</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="">اختر</option>
              <option value="low">منخفض</option>
              <option value="moderate">متوسط</option>
              <option value="high">مرتفع</option>
            </select>
    
            <label className="mt-4">طريقة الدفع:</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="">اختر</option>
              <option value="orangeCash">أورانج كاش</option>
              <option value="creditCard">كارت دفع</option>
            </select>
    
            <button type="submit" className="mt-6 bg-pink py-2 rounded-md hover:bg-blue-600">
              شراء التمرين
            </button>
          </form>
        </div>
      </div>    
  );
};

export default RegistrationPage;
