import {useState, useEffect} from 'react'
import axios from 'axios';
import { CircularProgress, Typography,Box } from '@mui/material';
import Card1 from '../../Components/Card1'
import { Grid } from '@mui/material';
import Card2 from '../../Components/Card2';
import Card3 from '../../Components/Card3';
import Card4 from '../../Components/Card4';
import Card5 from '../../Components/Card5';

export default function Skills(){
  const [loader,setLoader] = useState(true);
  const[skills,setSkills] = useState(null);

  const connectToServer = async() => axios.get('http://localhost:8000/Skills') 
                                         .then(res=>{
                                            console.log(res);
                                         }).catch(err=>console.log(err))
  connectToServer(); 
  return(
  
      <>
      These are my skills
      {
      
             loader? <CircularProgress/>:<Box>
            <Typography varient="h3">
              {skills.frontend}
              </Typography>
              <Typography varient="h3">
              {skills.language}  
              </Typography>  
              <Typography varient="h3">
              {skills.componentLibraries} 
              </Typography>
           </Box>
  }
    </>
  )
}