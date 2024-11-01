import Banner from './components/Banner/index';
import Features from './components/Futures/index';
import ConnectInfo from './components/Cook/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Newsletter from './components/Newsletter/Newsletter';



export default function Home() {
  return (
    <main className='bg-lightpink '>
      <Banner />
      <Features />
      <ConnectInfo />
      <Expert />
      <Gallery />
      {/*<Newsletter />*/}
    </main>
  )
}
