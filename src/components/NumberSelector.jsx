import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({
  setSelectNumber,selectNumber,error,setError
}) => {

    const numbers = [1,2,3,4,5,6];


    const NumberSelectorhandler = (value)=>{
      setSelectNumber(value)
      setError("");
    }


  return (
    <NumberSelectorConatiner>
    <p className='error'>{error}</p>
    <div className='flex'>
    {
        numbers.map((value,index)=>(
            <Box 
            isSelectvalue = {value==selectNumber}
            key={index} onClick={()=>NumberSelectorhandler(value)} >{value}</Box>
        ))
     }
    </div>
    <p>Select Number</p>
    </NumberSelectorConatiner>
  )
}


export default NumberSelector

const NumberSelectorConatiner = styled.div`

  display: flex;
  flex-direction: column;
  align-items: end;
  .flex{
    display: flex;
    gap: 24px;
  }
  .error{
    color: red;
    font-size: small;
  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }
`
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
