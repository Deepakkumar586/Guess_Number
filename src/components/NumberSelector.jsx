import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = () => {
        const [selectNumber,setSelectNumber] = useState(1);

    const numbers = [1,2,3,4,5,6];


  return (
    <div>
     {
        numbers.map((value,index)=>(
            <Box 
            isSelectvalue = {value==selectNumber}
            key={index} onClick={()=>setSelectNumber(value)} >{value}</Box>
        ))
     }
    </div>
  )
}

export default NumberSelector

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${props=>props.isSelectvalue ? "black" : "white"};
  color: ${props=>!props.isSelectvalue ? "black" : "white"};
`;
