import './HomePage.scss'
import QuickLinks from '../../components/HomePage/QuickLinks';
import News from '../../components/HomePage/News';
import Faq from '../../components/HomePage/Faq';
import Blog from '../../components/HomePage/Blog';
import Events from '../../components/HomePage/Events';
import DirectorDesk from '../../components/HomePage/DirectorDesk';
import About from '../../components/HomePage/About';
import Nirf from '../../components/HomePage/Nirf';

const HomePage = () => {
  document.title = 'APSA | Home';

  return (
    <div className='pt-16 bg-black'>
      <div className='justify-center flex items-center my-[5rem] lg:gap-1 md:gap-2 gap-6 flex-col text-5xl font-bold'>
        <h1 data-aos="zoom-in" className='font-extrabold text-center text-transparent lg:text-8xl md:text-6xl text-5xl mx-8 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Official Website of</h1>
        <h1 data-aos="zoom-in" className='font-bold text-center text-transparent lg:text-4xl md:text-3xl text-3xl mx-5 bg-clip-text bg-gradient-to-b from-gray-300 to-gray-600 my-3'>AIIMS PATNA STUDENT ASSOCIATION</h1>
        <h1 data-aos="zoom-in" className='font-extrabold text-center text-transparent lg:text-7xl md:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-sky-600'>A.P.S.A AIIMS Patna</h1>
        <div className='relative flex items-center w-full justify-center'>
          <img data-aos="fade-up" src="./images/hero.png" className='h-auto w-full lg:my-[-8rem] md:my-[-5rem]' alt="electric" />
        </div>
      </div>

      <div className='lg:mx-[4rem] md:mx-[3rem] mx-[2rem]'>
        <QuickLinks />
        <News />
        <Blog />
        <Events />
      </div>

      <DirectorDesk />
      <Nirf/>
      <About/>

      <div className='lg:mx-[4rem] md:mx-[3rem] mx-[2rem]'>
        <Faq />
      </div>
    </div>
  )
}

export default HomePage