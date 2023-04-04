import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


import {useState, useEffect} from 'react'
import axios from 'axios';
import { CircularProgress, Box} from '@mui/material';

    
  

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Experience() {
  const [expanded, setExpanded] = React.useState('panel1');

  const [loader,setLoader] = useState(true)
    const [Exper,setExper] = useState(null)
  
    const connectToServer = async() => axios.get('http://localhost:8000/Experience') 
                                           .then(res=>{
                                              console.log(res);
                                           }).catch(err=>console.log(err))
    connectToServer();
  

  return (
    <>
      2 years of web development
      {
             loader? <CircularProgress/>:<Box>
            <Typography variant="h3">
              {Experience.years}
              </Typography>
              <Typography variant="h3">
              {Experience.project}  
              </Typography>  
              <Typography variant="h3">
              {Experience.duration} 
              </Typography>
           
           
           </Box>


        }
    </>
  );
}