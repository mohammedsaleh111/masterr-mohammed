
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';
import { usePathname } from 'next/navigation';
import ClientNavbar from './components/ClientNavBar';


export const metadata = {
  title: 'أكاديمية ماستر محمد عطية لتمرينات التنفس تشي كونغ',
  description: 'Master Mohammed For Chi Kung Training Center |  ماستر محمد عطية لتدريب التشي كونغ',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
      <ClientNavbar/>
        {children}
      </body>
    </html>
  );
}
