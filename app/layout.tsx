
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';
import { usePathname } from 'next/navigation';
import ClientNavbar from './components/ClientNavBar';


export const metadata = {
  metadataBase: new URL('https://mr-mohamed-chi-kung.vercel.app/'),
  openGraph: {
    title: ' اكاديمية ماستر محمد عطية لتمرينات التنفس العميق (تشي كونغ) ',
    description: ' لأول مرة في الوطن العربي اكاديمية لتعليم الممارسات المتقدمة جدا لرياضة التشي كونغ وما يندرج بداخلها من تقنيات التنفس السرية والمتقدمة واساليب التخيل والتركيز الصحيحة للوصول الي اقصي الطاقات الجسدية والعقلية والنفسية ',
    images: [
      {
        url: '/images/Registration/logo.jpeg', // مسار الصورة داخل مجلد public
        width: 1200,
        height: 630,
        alt: ' اكاديمية ماستر محمد عطية لتمرينات التنفس العميق (تشي كونغ) ',
      },
    ],
    type: 'website',
    url: 'https://mr-mohamed-chi-kung.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    title: ' اكاديمية ماستر محمد عطية لتمرينات التنفس العميق (تشي كونغ) ',
    description: ' لأول مرة في الوطن العربي اكاديمية لتعليم الممارسات المتقدمة جدا لرياضة التشي كونغ وما يندرج بداخلها من تقنيات التنفس السرية والمتقدمة واساليب التخيل والتركيز الصحيحة للوصول الي اقصي الطاقات الجسدية والعقلية والنفسية ',
    images: ['/images/Registration/logo.jpeg'], // نفس المسار
  },
  title: ' اكاديمية ماستر محمد عطية لتمرينات التنفس العميق (تشي كونغ) ',
  description: ' لأول مرة في الوطن العربي اكاديمية لتعليم الممارسات المتقدمة جدا لرياضة التشي كونغ وما يندرج بداخلها من تقنيات التنفس السرية والمتقدمة واساليب التخيل والتركيز الصحيحة للوصول الي اقصي الطاقات الجسدية والعقلية والنفسية ',
  icons: {
    icon: '/favicon.svg', // إضافة favicon
  },
  favicon: '/images/Registration/logo.jpeg',
  keywords: ['chi kung', 'qigong', 'tai chi','yoga','تشي كونغ','قيقونج','تاي شي','يوجا','تمرينات التنفس العميق'], // كلمات مفتاحية لتحسين السيو
  author: ' ماستر محمد عطية',

  language: 'ar', // تعريف اللغة

  // Security and Performance
  contentSecurityPolicy: "default-src 'self'; img-src 'self' https://*; child-src 'none';",
  cacheControl: 'no-cache, no-store, must-revalidate',
  pragma: 'no-cache',
  expires: '0',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ar">
      <body>
      <ClientNavbar/>
        {children}
      </body>
    </html>
  );
}
