import { Box } from '@mui/material';
import React from 'react'
import Navbar from './Navbar';
import Details from './Details';
import { useState } from 'react';

const Middlepart = ({setResult,result,setResult2,result2}) => {
  const [airPollution,setAirPollution]=useState({});
 
  return (
    <Box>
        <Navbar setResult={setResult} setResult2={setResult2} setAirPollution={setAirPollution}/>
        <Details result={result} result2={result2} airPollution={airPollution} />
    </Box>
  )
}

export default Middlepart;