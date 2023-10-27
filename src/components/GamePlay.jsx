import React from 'react'
import styled from 'styled-components'
import NumberSelector from './NumberSelector'

const GamePlay = () => {
  return (
    <main>
        <ScoreConatiner>
            <h1>0</h1>
            <p>Total Score</p>
        </ScoreConatiner>


        {/* NumberSelector */}
        <NumberSelector/>


    </main>
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
