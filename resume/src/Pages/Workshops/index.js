import { CircularProgress, Typography,Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Projects(){
  let [loader,setloader] = useState(true);
  let [projects,setProjects] = useState(null);

  const getProjectData = async () => axios.get('http://localhost:8000/Projects')
                                          .then(res=>{
                                            console.log("Projects",res)
                                          }).catch(err => console.log(err))
  
                                          
return(
    <>
    this is my Workshop page
    {
    loader? <CircularProgress/>:<Box>
              <Typography variant="h3">
              {projects.colorimageofextremelylowlightpixeltohighlighttransformation }
              </Typography>
              <Typography variant="h3">
              {projects.multisensordataonIOT}  
              </Typography>  
              <Typography variant="h3">
              {projects.imageenhancement} 
              </Typography>
           </Box>
}
         </>

)
}  