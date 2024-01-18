import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './test.scss'
import { useState } from 'react';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Slide from './components/Slide'
import Bottom from './components/Bottom';

// import { App } from './App.1';

export default function App(){
  const [slide, setSlide] = useState(0);
  const [openMobile, setOpenMobile] = useState(false);

  function nextSlide(n) {
    if (n > 0)
      slide == 2 ? setSlide(0) : setSlide(slide + n);

    else
      slide == 0 ? setSlide(2) : setSlide(slide + n);
  }

  return (
    <>
      <Header openMobile={openMobile} setOpenMobile={setOpenMobile} />
      <main>
        <Overlay openMobile={openMobile} />
        <Slide slide={slide} setSlide={setSlide} nextSlide={nextSlide}></Slide>
        <Bottom></Bottom>
      </main>
    </>
  );
}
