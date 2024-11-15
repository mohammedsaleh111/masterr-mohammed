import Banner from './components/Banner/index';
import Features from './components/Futures/index';
import ConnectInfo from './components/ConnectInfo/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Newsletter from './components/Newsletter/Newsletter';
import AboutChi from './components/AboutChi';
import { bgColor } from './constants';



export default function Home() {
  return (
    <main className={`bg-[${bgColor}] bg-opacity-15`}>
      <Banner />
      <AboutChi/>
      <Features />
      <ConnectInfo />
      <Expert />
      <Gallery />
      {/*<Newsletter />*/}
    </main>
  )
}
