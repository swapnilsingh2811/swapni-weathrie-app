import React, { useEffect, useState } from 'react';
import { Box, Card, CardMedia, Stack, Typography } from '@mui/material';

import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import sunImage from '../Images/sky cloud.jpg';
import cloud from '../Images/cloud.jpg';
import AirIcon from '@mui/icons-material/Air';
import TodayTemp from './TodayTemp';
import axios from 'axios';


const Details = ({result,result2,airPollution}) => {
  console.log(airPollution)
  return (
    result && Object.keys(result).length >0 && Object.keys(airPollution).length > 0 ? (
    <Box sx={{mt:"20px", ml:"20px", display:"flex", flexDirection:"column"}}>
      <Stack direction="row" gap={4}>
        <Card sx={{width:"410px",height:"290px", borderRadius:"20px", position:"relative"}}>
          <CardMedia 
           component="img"
           image={sunImage}
           alt='sun'  
           sx={{maxWidth:"410px", maxHeight:"290px"}}
          />
        </Card>
        <Box sx={{position:"absolute", ml:"20px", mt:"20px"}}>
          <Box sx={{ display:"flex", flexDirection:"row", gap:"15px"}}>
            <FilterDramaOutlinedIcon sx={{color:'#fb5607', margin:"auto" ,borderRadius:"50%", backgroundColor:"white", p:"8px"}} />
            <Box>
              <Typography fontWeight={600}>Weather</Typography>
              <Typography fontWeight={400}>What's the weather.</Typography>
            </Box>
          </Box>
          <Box  width="140px" mt="20px" ml="5px" sx={{ display:"flex", flexDirection:"row"}} >
          <Typography variant='h4' fontWeight={600}>{Math.round(result.main.temp)}<span>&deg;C </span></Typography>
          <Typography sx={{backgroundColor:"white", width:"25px",height:"15px", fontSize:"10px", p:"3px 1px 1px 2px", borderRadius:"5px", margin:"auto"}}>11<span>&deg;C </span></Typography>
        </Box>
        <Typography m="8px 0 0 8px">
          {result.weather[0].main} 
          </Typography>
        </Box>
        <Box sx={{position:"absolute", display:"flex", flexDirection:"row", gap:"15px", mt:"200px", ml:"25px"}}>
          <Card sx={{backgroundColor:"#355070", color:"white", p:"15px 25px", borderRadius:"20px"}} >
            <Typography fontSize={12} pl="2px" >Pressure</Typography>
            <Typography  fontWeight={600} >{result.main.pressure}mb</Typography>
          </Card>
          <Card sx={{backgroundColor:"#b5e48c",p:"15px 25px", borderRadius:"20px"}}>
            <Typography fontSize={12}>Visibility</Typography>
            <Typography  fontWeight={600}>{result.visibility}m</Typography>
          </Card>
          <Card  sx={{p:"15px 25px", borderRadius:"20px"}}>
            <Typography fontSize={12}>Humidity</Typography>
            <Typography fontWeight={600}>{result.main.humidity} %</Typography>
          </Card>
        </Box>
   

        <Card sx={{width:"410px", height:"290px", borderRadius:"20px", position:"relative"}}>
          <CardMedia 
            component="img"
            image={cloud}
            alt='cloud'  
            sx={{maxWidth:"410px", height:"300px"}}
          />
        </Card>
       
       <Box sx={{position:"absolute", ml:"460px", mt:"20px"}}>
          <Box sx={{ display:"flex", flexDirection:"row", gap:"15px"}}>
            <AirIcon sx={{color:'#fb5607', margin:"auto" ,borderRadius:"50%", backgroundColor:"white", p:"8px"}} />
            <Box color={'white'}>
              <Typography fontWeight={600}>Air Quality</Typography>
              <Typography fontWeight={400}>Main pollution PM : {airPollution.data[0].pm10}</Typography>
            </Box>
          </Box>
          <Box  width="140px" mt="20px" ml="5px" sx={{ display:"flex", flexDirection:"row"}} >
          <Typography variant='h4' fontWeight={600} color={'white'}>{airPollution.data[0].aqi}</Typography>
          <Typography sx={{backgroundColor:"#b5e48c", width:"25px",height:"15px", fontSize:"10px", p:"3px 0 1px 5px", borderRadius:"5px", margin:"auto", fontWeight:"600"}}>AQI</Typography>
        </Box>
        <Typography m="8px 0 0 8px" color={'white'}>West Wind</Typography>
        </Box>
      

      </Stack> 
      <TodayTemp result={result} result2={result2}/>
    </Box>
    ) :<div>Loading</div>
  )
}

export default Details;