import { Box, InputBase, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import profile from "../Images/profile.jpg";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { getWeather,getWeatherDays,getAirPollution } from '../services/api';

const Navbar = ({setResult,setResult2 ,setAirPollution}) => {
  const [data, setData] = useState("");


  const handleChange = (e) => {
    setData({...data,  [e.target.name]: e.target.value});
    
  }
useEffect(()=>{
    const fetchData=async ()=>{

        if(!data.city){
            let response=await getWeather("delhi");
            setResult(response);
          
        }else{
            
            let response =  await getWeather(data.city);
            setResult(response);
          
        }
    }
    fetchData();
},[]);
const filterFunc=(data)=>{
    const filtered=data.filter((elements,index)=>(index+1)%8===0)
    // console.log(filtered);
    return filtered;
};
useEffect(()=>{
    const fetchDays=async()=>{
        
        if(!data.city){
            let response=await getWeatherDays("delhi");
            // setResult(response);
            // console.log(response);
            ;
            setResult2(filterFunc(response.list));
          
        }else{
            
            let response =  await getWeatherDays(data.city);
            // setResult(response);
            setResult2(filterFunc(response.list));
          
        }
    }
    fetchDays();
},[]);

  const getWeatherInfo = async() =>{
    
        if(!data.city){
            let response=await getWeather("delhi");
            setResult(response);
            
        }else{

            let response =  await getWeather(data.city);
            setResult(response);
            
        }
  }

  const getWeatherFiveDays = async() =>{
    
    if(!data.city){
        let response=await getWeatherDays("delhi");
        setResult2(filterFunc(response.list));
        
    }else{

        let response =  await getWeatherDays(data.city);
        setResult2(filterFunc(response.list));
    }
}

const getAirPollutions=async ()=>{
    if(!data.city){
        let response=await getAirPollution("delhi");
        // setResult2(filterFunc(response.list));
        setAirPollution(response)

        
    }else{

        let response =  await getAirPollution(data.city);
        // setResult2(filterFunc(response.list));
        setAirPollution(response)

    }
}

useEffect(()=>{
    const fetchAirPollution=async()=>{
        
        if(!data.city){
            let response=await getAirPollution("delhi");
            // setResult(response);
            // console.log(response);
            setAirPollution(response)
            ;
            // setResult2(filterFunc(response.list));
          
        }else{
            
            let response =  await getAirPollution(data.city);
            // setResult(response);
            // setResult2(filterFunc(response.list));
          setAirPollution(response);
        }
    }
    fetchAirPollution();
},[]);

const myFunction=()=>{
    getWeatherInfo();
    getWeatherFiveDays();
    getAirPollutions();
}
  

  return (
    <Box sx={{  width:"920px", mt:"20px"}}>
        <Stack direction="row">
            <img src={profile} alt="soni" className='profile'/>
            <Box >
                <Typography variant='h5' >Hello,</Typography>
                <Typography variant='h5' fontWeight={600}>Swapnil</Typography>
            </Box>
            <Paper sx={{width:"270px", height:"35px", backgroundColor:"#e5e5e5", borderRadius:"20px", mt:"10px", ml:"35%", display:"flex", textJustify:"center"}}>
                <InputBase sx={{fontSize:"15px", width:"80%",ml:"10px", mr:"10px"}}
                    placeholder='Search for city' 
                   onChange={(e) => handleChange(e)}
                   name="city"
                />
                <SearchOutlinedIcon sx={{color:'#fb5607', m:"auto", pr:"10px"}} onClick={() =>myFunction()}/>
            </Paper>
            <NotificationsNoneOutlinedIcon sx={{color:"#6c757d", ml:"5%", width:"25px", height:"25px",p:"5px", border:"1px solid #6c757d", borderRadius:"50%",mt:"8px"}}  />
        </Stack>
        
    </Box>
  )
}

export default Navbar;