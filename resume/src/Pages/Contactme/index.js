import { Typography } from '@mui/material';

import {useState, useEffect} from 'react'
import axios from 'axios';
import { CircularProgress, Box} from '@mui/material';
export default function Contactme(){
    
    const [loader,setLoader] = useState(true);
    const[cont,setcont] = useState(null);
    const connectToServer = async() => axios.get('http://localhost:8000/Contactme') 
                                           .then(res=>{
                                            console.log(res);
                                           }).catch(err=>console.log(err))
    connectToServer(); 
    return(
        <>
         this is Akshitha
        {
             loader? <CircularProgress/>:<Box>
            <Typography variant="h3">
              {cont.akshitha}
              </Typography>
              <Typography variant="h3">
              {cont.jaganmohanreddy}  
              </Typography>  
              <Typography variant="h3">
              {cont.akshitha} 
              </Typography>
           
           
          </Box>
        
        }




        </>
        
    )
    }
