"use client";
import { useState, useEffect } from "react";
import { db, auth } from "../../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-input-2"; // استيراد مكتبة رقم الهاتف
import "react-phone-input-2/lib/style.css"; // استيراد التنسيقات الخاصة بالمكتبة

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    goal: "",
    age: "",
    gender: "",
    activityLevel: "",
    userPhone: "",
    bloodType: "",
    medicalHistory: "",
  });

  interface User {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
  }

  const [user, setUser] = useState<User | null>(null);
  const [buttonText,setButtonText] = useState('تواصل الان')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, userPhone: value });
  };

  const sendEmailToTrainer = async () => {
    try {
      const templateParams = {
        userName: user?.displayName,
        userEmail: user?.email,
        userPhone: formData.userPhone,
        goal: formData.goal,
        age: formData.age,
        gender: formData.gender,
        activityLevel: formData.activityLevel,
        bloodType: formData.bloodType,
        medicalHistory: formData.medicalHistory,
      };

      await emailjs.send(
        "service_3kz71eb",
        "template_2fafnpo",
        templateParams,
        "XNb6U8l6Pb57-H3K9"
      );

      alert("تم إرسال طلب التواصل بنجاح!");
    } catch (error) {
      console.error("خطأ أثناء إرسال البريد الإلكتروني:", error);
    }
  };

  const submitForm = async () => {
    try {
      if (!user) {
        alert("يرجى تسجيل الدخول أولاً.");
        return;
      }

      setButtonText('جاري ارسال البيانات...');

      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        await setDoc(userRef, {
          userId: user?.uid,
          name: user.displayName,
          image:user.photoURL,
          email: user.email,
          userPhone: formData.userPhone,
          age: formData.age,
          gender: formData.gender,
          activityLevel: formData.activityLevel,
          goal: formData.goal,
          bloodType: formData.bloodType,
          medicalHistory: formData.medicalHistory,
          isSeen: false, // إضافة الحقل isSeen
          sendDataAt: new Date().toISOString() // إضافة حقل submissionDate
        });
      }

      await sendEmailToTrainer();
      alert("تم التواصل بنجاح! سيتم التواصل معك في خلال 48 ساعة من قبل إدارة الموقع علي رقم الواتساب لبدء التدريب.");
      window.location.href = "/";
    } catch (error) {
      console.error("خطأ أثناء حفظ بيانات التمرين:", error);
      alert("حدث خطأ. حاول مرة أخرى.");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-right">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">تسجيل شراء تمرين</h2>
        <p className="text-gray-700">الاسم: {user?.displayName || "لم يتم تسجيل الدخول"}</p>
        <p className="text-gray-700">البريد الإلكتروني: {user?.email || "لم يتم تسجيل الدخول"}</p>

        <form className="flex flex-col" onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
          <label className="mt-4">: أهدافك من ممارسة التشي كونغ</label>
          <input
            type="text"
            name="goal"
            value={formData.goal}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          />

          <label className="mt-4">: العمر</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          />

          <label className="mt-4">: الجنس</label>
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

          <label className="mt-4">: مستوى النشاط</label>
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

          <label className="mt-4">: فصيلة الدم</label>
          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">اختر</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>

          <label className="mt-4">: التاريخ المرضي</label>
          <input
            type="text"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          />

          <label className="mt-4">: رقم الواتس</label>
          <PhoneInput
            country={"eg"}
            value={formData.userPhone}
            onChange={handlePhoneChange}
            placeholder="ادخل رقم الواتس بدون رمز البلد"
            inputProps={{
              type: "tel",
              name: "userPhone",
              required: true,
              className: "border border-gray-300 p-2  rounded-md text-black",
            }}
            enableSearch={true}
            disableCountryGuess={true}
            disableCountryCode={true} // تعطيل كود الدولة الافتراضي
            disableDropdown={false} // ترك خاصية البحث عن الدول مفعلة
          />


          <button type="submit" className="mt-10 text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
