import { Typography } from '@mui/material';

import {useState, useEffect} from 'react'
import axios from 'axios';
import { CircularProgress, Box} from '@mui/material';


export default function Certifications() {
  const [loader,setLoader] = useState(true);
    const[Cert,setCer] = useState(null);

    const connectToServer = async() => axios.get('http://localhost:8000/Certifications') 
                                           .then(res=>{
                                            console.log(res);
                                           }).catch(err=>console.log(err))
    useEffect(() =>{                                 
        connectToServer(); 
    },[])
    return(
        <>
        This is my Certifications
          {
             loader? <CircularProgress/>:<Box>
            <Typography variant="h3">
              {Cert.frontend}
              </Typography>
              <Typography variant="h3">
              {Cert.languages}  
              </Typography>  
              <Typography variant="h3">
              {Cert.componentsLibraries} 
              </Typography>
           
           
             </Box>
        
          }




         </>
        
    )
    }