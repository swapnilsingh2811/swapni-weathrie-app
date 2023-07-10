import React from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';

import AirIcon from '@mui/icons-material/Air';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import RainyBlue from '../Images/rain blue.jpg';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, LinearScale, PointElement, CategoryScale} from 'chart.js';
import Sunny from '../Images/sunny.png';
import Cloudy from '../Images/clouds-and-sun.png';
import SunCloudy from '../Images/cloudIcon.jpg';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const TodayTemp = ({result,result2}) => {
    console.log(result2)
  const data = {
    labels: ["Morning", "AfterNoon", "Evening", "Night"],
    datasets: [{
        data: [6, 13, 8, 15],
        backgroundColor: 'white',
        borderColor: '#fb5607',
        pointBorderColor: '#fb5607',
        color:"white",
        pointBorderWidth: 4,
        tension : 0.5,
        
    }]
  };
  const options = {
    plugins: {
        legend: false
    },
    scales: {
        x: {
            grid: {
                display: true,
                
            }
        },
        y: {
            min:2,
            max: 18,
            display: false,
            ticks : {
                stepSize: 'none'
            },
            grid:{
                display:false,
                
            }
        }
    }
  }

  return (
    <Box mt="30px" >{
        Object.keys(result2).length?(

        
        <Box sx={{display:"flex", flexDirection:"row"}}>
            <Box sx={{display:"flex", flexDirection:"column", position:"relative"}}>
                <Box display="flex" flexDirection="row">
                    <Typography width="300px" variant='h5' mr="50px" fontWeight={800}> How's the temperature today?</Typography>
                    <ThermostatAutoIcon sx={{backgroundColor:"#fb5607", color:"white", fontWeight:"800"}} className='icon2'/>
                    <BeachAccessOutlinedIcon sx={{color:"#6c757d", ml:"25px", width:"30px", height:"30px"}}/>
                    <AirIcon sx={{color:"#6c757d", ml:"25px", width:"30px", height:"30px"}} />
                </Box>
                <Box sx={{height:"180px", mt:"30px", ml:"20px" }}>
                    <Line data={data} options={options} ></Line>
                </Box>
            </Box>

            <Box position="absolute">
                <Box display="flex" flexDirection="row">
                    <img src={Cloudy} alt="cloudy" className='profile1'/>
                    <img src={Sunny} alt="sunny" className='profile2'/>
                    <img src={SunCloudy} alt="sunc" className='profile3'/>
                    <img src={SunCloudy} alt="sunc2" className='profile4'/>
                </Box>
                <Box  display="flex" flexDirection="row" sx={{mt:"33px", ml:"25px", gap:"62px"}}>
                    <Typography fontWeight={600} variant='h6'>{Math.round(result2[0].main.temp_max - 273.15 -5)}<span>&deg;C </span></Typography>
                    <Typography fontWeight={600} variant='h6'>{Math.round(result2[0].main.temp_max - 273.15 + 6)}<span>&deg;C </span></Typography>
                    <Typography fontWeight={600} variant='h6'>{Math.round(result2[0].main.temp_max - 273.15 + 3)}<span>&deg;C </span></Typography>
                    <Typography fontWeight={600} variant='h6'>{Math.round(result2[0].main.temp_max - 273.15 -7)}<span>&deg;C </span></Typography>
                </Box>
            </Box>
            
            {/* <Box> */}
                <Card sx={{width:"300px", height:"270px", ml:"40px", borderRadius:"20px", position:"relative"}}>
                    <CardMedia 
                        component= 'img'
                        image={RainyBlue}
                        alt="weather"
                        sx={{maxWidth:"300px", maxHeight:"270px"}}
                        />
                </Card>
                <Box position="absolute" sx={{m:"20px 0 0 550px"}}>
                    <Typography fontWeight={600}>Tomorrow</Typography>
                    <Typography variant='h6' sx={{mt:"20px", fontWeight:"800"}}>{result.name}</Typography>
                    <Typography variant='h4' sx={{m:"70px 0 0 10px", fontWeight:"600"}}>{Math.round(result2[0].main.temp_max - 273.15)}<span>&deg;C </span></Typography>
                    <Typography variant='h6' ml="10px">{result.weather[0].main} </Typography>
                </Box>
            {/* </Box> */}
          
            
        </Box>
    ):<div>Loading</div>}
    </Box>
    )
}

export default TodayTemp;