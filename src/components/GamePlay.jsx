import React, { useState } from 'react'
import styled from 'styled-components'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  
    const [score,setScore]  = useState(0);
    const [selectNumber,setSelectNumber] = useState(1);
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] = useState(""); 
    const [showRules,setShowRules] = useState(false);

    // generate Number
    const generateRandomNumber = (min,max)=>{

        return Math.floor(Math.random()*(max-min)+min);
        // console.log(Math.floor(Math.random()*(max-min)+min)) ;
    }
    const roleDice = ()=>{
        if(!selectNumber){
            setError("You Have not selected any Number")
            setScore(0);
            return

        }
        
        const randomNumber  = generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);

        

        if(selectNumber === randomNumber){
            setScore((prev)=>prev+randomNumber);
            window.alert("You Win!")

        }
        else{
            setScore((prev)=>prev-2);
        }

        setSelectNumber(undefined);
    }

    // resetFunctionality
    const ResetFunction =()=>{
        setScore(0);
    }





  return (
    <MainContainer >
       <div className='top_section'>
       <ScoreConatiner>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreConatiner>


        {/* NumberSelector */}
        <NumberSelector selectNumber={selectNumber} setSelectNumber={setSelectNumber}
        error={error}
         setError={setError}/>
       </div>
       <RoleDice currentDice={currentDice} roleDice={roleDice}/>

       <div className='btns'>
        <OutlineButton onClick={ResetFunction}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>
        
            {
            showRules ? "Hide" :"Show"
        }
        
        </Button>
       </div>

       {showRules && <Rules/>}
       </MainContainer>
  )
}

export default GamePlay 

const ScoreConatiner = styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        font-size: 100px;
        line-height: 150px;

    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
`;

const MainContainer = styled.main`
    padding-top: 70px;
   
        .top_section{
            align-items: center;
           display: flex;
           gap:40rem;
          justify-content: center;
        }
        .btns{
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            margin-top: 40px;
        }
`
