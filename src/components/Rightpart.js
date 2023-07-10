import React from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Divider from '@mui/material/Divider';
import Sunny from '../Images/sunny.png';

const Rightpart = ({result2,result}) => {
   
  return (
    <Box sx={{backgroundColor:"#e5e5e5", width:"500px", ml:"40px", p:"0 30px 0 30px"}}>
      {Object.keys(result).length ? (
      <Box>
        
      <Box sx={{mt:"30px"}} display="flex" flexDirection="row" pb="15px">
        <Box>
          
          <Typography variant='h6' fontWeight={600}>Swapnil</Typography>
          <Stack direction="row" gap={2}>
            <Typography>{result.name}, {result.sys.country} </Typography>
            <KeyboardArrowDownOutlinedIcon sx={{color:"#fb5607"}}/>
          </Stack>
        </Box>
        <Typography  m="auto" variant='h4'  color="#fb5607" fontWeight={600}>{Math.round(result.main.temp)}<span>&deg;C </span></Typography>
        </Box>
        <Divider/>
        
        <Box sx={{display:"flex", flexDirection:'row', justifyContent:"space-between", m:"10px 20px 20px 10px"}}>
          <Box>
            <Typography fontWeight={600}>Sunset</Typography>
            <Typography fontSize={15}>{new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Typography>
          </Box>
          <Box>
            <Typography fontWeight={600}>Sunrise</Typography>
            <Typography fontSize={15}>{new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Typography>
          </Box>
        </Box>
</Box>
) :<div>Loading</div>}
          <Typography variant='h5' sx={{m:"0 0 10px 10px", fontWeight:"600"}}>Weather Prediction</Typography>
          
          {Object.keys(result2).length?result2.map((element)=>(

            <Card sx={{ borderRadius:"40px", pb:"10px", mb:"10px"}}>
            <Box display="flex" flexDirection="row" m="auto">
              <img src={Sunny} alt="sunny" className='profileR'/>
              <Box>
                <Typography fontWeight="600" m="10px 0 0 15px ">{new Date(element.dt_txt).toDateString()}</Typography>
                <Box  display="flex" flexDirection="row" gap={10} ml="15px">
                  <Typography fontWeight="600" >{element.weather[0].main}</Typography>
                  <Typography fontWeight="600" color="#fb5607">{Math.round(element.main.temp_max - 273.15 )}<span>&deg;c</span></Typography>
                </Box>
              </Box> 
            </Box>
          </Card>
          ))
          :<div>Loading</div>
    
  }
    </Box>
  )
}

export default Rightpart;