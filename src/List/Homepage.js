import React, { useState } from 'react';
import { Stack } from '@mui/material';


import Sidebar from '../components/Sidebar';
import Middlepart from '../components/Middlepart';
import Rightpart from '../components/Rightpart';



const Homepage = () => {
  const [result2,setResult2]=useState({});
  const [result, setResult] = useState({});
 Object.keys(result2).length?console.log(result2):console.log('nothing');
  return (
    <Stack direction="row">
        <Sidebar/>
        <Middlepart setResult2={setResult2} setResult={setResult} result={result} result2={result2}/>
        <Rightpart result2={result2} result={result}/>
    </Stack>
  )
}

export default Homepage;