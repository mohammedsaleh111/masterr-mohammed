import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'Master Mohammed',
  description: 'ماستر محمد عطية خبير التشي كونغ',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/*<Footer />*/}
      </body>
    </html>
  )
}
