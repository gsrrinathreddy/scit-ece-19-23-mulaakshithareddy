import {useState, useEffect} from 'react'
import axios from 'axios';
import { CircularProgress, Typography, Box} from '@mui/material';


export default function Qualifications() {
  const [loader,setLoader] = useState(true);
    const[qual,setQual] = useState(null);

    const connectToServer = async() => axios.get('http://localhost:8000/Qualifications') 
                                           .then(res=>{
                                            console.log(res);
                                           }).catch(err=>console.log(err))
    useEffect(() =>{                                 
        connectToServer(); 
    },[])
    return(
        <>
        This is my Qualifications
        {
             loader? <CircularProgress/>:<Box>
            <Typography variant="h3">
              {qual.btech}
              </Typography>
              <Typography variant="h3">
              {qual.grade}  
              </Typography>  
              <Typography variant="h3">
              {qual.performance} 
              </Typography>
           </Box>
        }
        
        
        
        </>



    )
}