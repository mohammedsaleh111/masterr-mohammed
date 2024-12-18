"use client"; // قم بتحويل هذا المكوّن فقط إلى Client Component
import { usePathname } from 'next/navigation';
import Navbar from '../Navbar';

export default function ClientNavbar() {
  const pathname = usePathname();
  const hideNavbar = pathname === '/registration'; // إخفاء الـ Navbar لصفحة محددة

  if (hideNavbar) return null; // لا تعرض أي شيء
  return <Navbar />;
}
