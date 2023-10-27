import styled from 'styled-components';
import StartGame from './components/StartGame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';


function App() {
  const [gameStarted,setGameStarted] = useState(false);
  
  const toggleGamePlay = ()=>{
    setGameStarted((prev)=>!prev);
  } 


  return (
    <>
     {
      gameStarted ? <StartGame toggle={toggleGamePlay}/>: <GamePlay/> 
     }
    </>
  )
}

export default App

// CSS


