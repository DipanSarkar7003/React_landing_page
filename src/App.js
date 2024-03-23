import Navbar from './components/Navbar';
import Hello from './components/hello';
import banner from "./images/desktop_hero.png"
import HeroText from './components/heroText';
import Hero_image from './components/hero_image';
function App() {
  return (
    <div className=" ">

      <Navbar />
      <div className='flex-col-reverse w-full  hero_part md:flex-row md:h-[80vw] flex justify-between sm:px-28 gap-[6vw] '>
        <HeroText />
        <Hero_image />
      </div>
    </div>
  );
}

export default App;
