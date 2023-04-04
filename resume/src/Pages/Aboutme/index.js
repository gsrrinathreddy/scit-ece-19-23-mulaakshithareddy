import Typography from '@mui/material/Typography';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { CircularProgress,Box} from '@mui/material';
export default function Aboutme(){
    const[loader,setLoader] = useState(true);
    const[aboutme,setAboutme] = useState(null);
    const connectToServer = async() => axios.get('http://localhost:8000/Aboutme') 
                                           .then(res=>{
                                            console.log(res.data);
                                            setAboutme(res.data);
                                            setLoader(false)
                                           }).catch(err=>console.log(err))
        useEffect(()=>{                                   
    connectToServer(); 
        },[])                                    
    return(
        <>
         This is Aboutme
         {
             loader? <CircularProgress/>:<Box>
            <Typography variant="h3">
              {Aboutme.MULAAKSHITHA}
              </Typography>
              <Typography variant="h3">
              {Aboutme.jaganmohanreddy}  
              </Typography>  
              <Typography variant="h3">
              {Aboutme.mulaakshithareddy} 
              </Typography>
           
           
           </Box>
         }
        
        </>
        
    )
    }