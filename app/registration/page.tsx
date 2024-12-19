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
    isSporter: "",
    sportName: "",
    whenSport: "",
    userPhone: "",
    bloodType: "",
    isSeek: "",
    medicalHistory: "",
  });

  interface User {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
  }

  const [user, setUser] = useState<User | null>(null);
  const [buttonText, setButtonText] = useState('تواصل الان')

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
        isSporter: formData.isSporter,
        sportName: formData.isSporter == 'no' ? '' : formData.isSporter == 'was' ? `كنت امارس رياضة ${formData.sportName} منذ ${formData.whenSport} من الاعوام` : formData.sportName,
        whenSport: formData.whenSport || '0',
        bloodType: formData.bloodType,
        isSeek: formData.isSeek,
        medicalHistory: formData.isSeek == 'no' ? 'لا يوجد أمراض' : formData.medicalHistory,
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
          image: user.photoURL,
          email: user.email,
          userPhone: formData.userPhone,
          age: formData.age,
          gender: formData.gender,
          isSporter: formData.isSporter,
          sportName: formData.sportName,
          whenSport: formData.whenSport,
          goal: formData.goal,
          bloodType: formData.bloodType,
          isSeek: formData.isSeek,
          medicalHistory: formData.medicalHistory,
          isSeen: false, // إضافة الحقل isSeen
          sendDataAt: new Date() // إضافة حقل submissionDate
        });
      }

      await sendEmailToTrainer();
      alert("تم ارسال البيانات بنجاح! سيتم التواصل معك في خلال 48 ساعة من قبل إدارة الموقع علي رقم الواتساب لبدء التدريب.");
      window.location.href = "/";
    } catch (error) {
      console.error("خطأ أثناء حفظ بيانات التمرين:", error);
      alert("حدث خطأ. حاول مرة أخرى.");
    }
  };

  return (
    <div className="p-8 bg-gray-100 flex text-right">
      <div className="bg-white rounded-lg shadow-md p-6  mx-auto ">
      <h2 className="text-2xl font-semibold text-center pb-9">طلب تسجيل شراء الكورس</h2>
        <img src="/images/Registration/logo.jpeg" alt="" className=" w-[100vw] sm:w-[75vw] lg:w-[50vw] object-cover mx-auto" />
        <br />
        <p className=" text-2xl">
          هام جدا
        </p>
        <p className="text-gray-700 pt-5 text-right">مرحبا {user?.displayName || "لم يتم تسجيل الدخول"}</p>
        <br />
        <p className="text-center">
          برجاء ملئ الحقول بدقة لانه بناءا علي بياناتك سيتم تحديد نظام التدريب والتمارين المناسبة والمخصصة لك فقط وبارسالك هذه البيانات سيتم التواصل معك من قبل ماستر محمد عطية لاعطاءك اول تمرين والذي يبلغ سعره 50 دولارا فقط
        </p>

        <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
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

          <label className="mt-4">:  هل تمارس الرياضة </label>
          <select
            name="isSporter"
            value={formData.isSporter}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">اختر</option>
            <option value="no">لا</option>
            <option value="was">كنت امارس</option>
            <option value="yes">نعم انا رياضي</option>
          </select>

          <div>
            {formData.isSporter === "yes" ? (
              <div className="mt-4 flex flex-row gap-3">
                <input
                  type="text"
                  name="sportName"
                  value={formData.sportName}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 p-2 rounded-md"></input>
                <label className="mt-4">: اسم الرياضة</label>
              </div>) : null}

            {formData.isSporter === "was" ? (
              <div className="flex flex-col">
                <div className="mt-4 flex flex-row gap-3">
                  <input
                    type="text"
                    name="sportName"
                    value={formData.sportName}
                    onChange={handleInputChange}
                    required
                    className="border border-gray-300 p-2 rounded-md"></input>
                  <label className="mt-4">: اسم الرياضة</label>
                </div >
                <label className="mt-4 p-3">:  منذ متي توقفت عن التمرين بالسنين</label>
                <input
                  type="number"
                  name="whenSport"
                  value={formData.whenSport}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 p-2 rounded-md"></input>
              </div>
            ) : null}
          </div>

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

          <label className="mt-4">:  هل تعاني من امراض مزمنة ؟</label>
          <select
            name="isSeek"
            value={formData.isSeek}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          >
            <option onInput={() => null} value="">اختر</option>
            <option value="yes">نعم</option>
            <option value="no">لا</option>
          </select>
          <div>
            {formData.isSeek === "yes" ? (
              <div className="mt-4 flex flex-row gap-3">
                <input
                  type="text"
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 p-2 rounded-md"></input>
                <label className="mt-4">:من ماذا تعاني</label>
              </div>
            ) : null}

          </div>

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
