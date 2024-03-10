import Navbar from './components/Navbar';
import Hello from './components/hello';
import banner from "./images/desktop_hero.png"
import HeroText from './components/heroText';
import Hero_image from './components/hero_image';
function App() {
  return (
    <div className="App h-[100vh]">

      <Navbar />
      <div className='flex justify-between px-28 gap-[6vw]'>
        <HeroText />
        <Hero_image />
      </div>
    </div>
  );
}

export default App;
