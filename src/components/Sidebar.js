import React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FlipOutlinedIcon from '@mui/icons-material/FlipOutlined';

import photo from '../Images/weather app.jpg';


const Sidebar = () => {
  return (
    <Box sx={{ml:"30px", mt:"10px",  width:"120px", height:"94vh", p:"10px"}}>
        <img src={photo} alt="soni" width="40px" className='photos'/>
        <Typography fontWeight={600} > SWAPNIL</Typography>
        <Stack sx={{direction:'row', gap:"40px"}}>
            <InsertChartOutlinedRoundedIcon sx={{backgroundColor:"#fb5607", color:"white", fontWeight:"800"}} className='icon1'/>
            <ConnectedTvIcon sx={{color:"#6c757d", ml:"15px", width:"30px", height:"30px"}}/>
            <PinDropOutlinedIcon sx={{color:"#6c757d", ml:"15px", width:"30px", height:"30px"}}/>
            <CalendarMonthOutlinedIcon sx={{color:"#6c757d", ml:"15px", width:"30px", height:"30px"}}/>
            <SettingsRoundedIcon  sx={{color:"#6c757d", ml:"15px", width:"30px", height:"30px"}}/>
            <FlipOutlinedIcon sx={{color:"#6c757d", ml:"15px", width:"30px", height:"30px", mt:"120px"}}/>
        </Stack>
        
    </Box>
  )
}

export default Sidebar;