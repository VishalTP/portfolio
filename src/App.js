import './App.css';
import Intro from './pages/Intro';
import Works from './pages/Works';
import Skills from './pages/Skills';
import { useEffect, useRef, useState } from 'react';
import Ecommerce from './pages/Ecommerce';
import MovieApp from './pages/MovieApp';
import WeatherApp from './pages/WeatherApp';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {

  // const show = (e)=>{
  //   console.log(e)
  // }
  const [first, setFirst] = useState("0vh")
  const [second, setSecond] = useState(0)
  const [third, setThird] = useState(0)
  const [fourth, setFourth] = useState(0)
  const [fifth, setFifth] = useState(0)
  const [sixth, setSixth] = useState(0)
  // useEffect(()=>{
  //   console.log(second)
  // },[second])

  const reff = useRef()

  const handleScroll = (e)=>{
    e.deltaY>0 ? console.log("up"): console.log("down")
    setFirst(prev => e.deltaY > 0 ? (prev === "500vh"? prev : +(prev.split("v")[0]) +100+"vh"): (prev === "0vh" ? prev : +(prev.split("v")[0]) - 100+"vh")) 
    console.log(first)
  }

  useEffect(()=>{
    window.scroll(0,0)
    // window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="App" onWheelCapture={handleScroll} ref={reff} 
      style ={{
        transform: `translate3d(0, ${first}, 0)`,
        transition: "all 700ms ease 0s"
      }} >


{/* <Parallax pages={2} style={{ top: '0', left: '0' }}>
  <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <p>Scroll down</p>
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>
    <p>Scroll up</p>
  </ParallaxLayer>
</Parallax> */}



        <Intro setFirst={setFirst}/>
        <Works first={first} setSecond={setSecond} />
        <Skills second={second} setThird={setThird} />
        <Ecommerce third={third} setFourth={setFourth} />
        <MovieApp fourth={fourth} setFifth={setFifth} />
        <WeatherApp fifth={fifth} setSixth={setSixth} />
    </div>
  );
}

export default App;
