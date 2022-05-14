import './App.css';
import Intro from './pages/Intro';
import Works from './pages/Works';
import Skills from './pages/Skills';
import { useEffect, useState } from 'react';
import Ecommerce from './pages/Ecommerce';
import MovieApp from './pages/MovieApp';
import WeatherApp from './pages/WeatherApp';

import { Parallax, ParallaxLayer } from '@react-spring/web'

function App() {

  // const show = (e)=>{
  //   console.log(e)
  // }
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [third, setThird] = useState(0)
  const [fourth, setFourth] = useState(0)
  const [fifth, setFifth] = useState(0)
  const [sixth, setSixth] = useState(0)
  // useEffect(()=>{
  //   console.log(second)
  // },[second])

  useEffect(()=>{
    window.scroll(0,0)
  }, [])
  return (
    <div className="App">


<Parallax pages={2} style={{ top: '0', left: '0' }}>
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
</Parallax>



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
