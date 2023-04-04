import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Aboutus(){
    const [loader,setLoader]= useState(true);
    const [aboutme,setAboutme]=useState(null);

    const connectToServer = async ()=> axios.get('http://localhost:8000/Aboutme')
                                            .then(res=>{
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false);
                                            }).catch(err=>console.log(err))
    useEffect(()=>{
        connectToServer();
    },[])
    
    return(
        <>
<Typography>Name: MULA AKSHITHA</Typography>
<Typography>Father Name: MULA JAGAN MOHAN REDDY</Typography>
<Typography>Mother Name: MULA UMA </Typography>
<Typography>Email: mulaakshithareddya@gmail.com</Typography>
<Typography>Phone No.:9390239538</Typography>
        </>
        
    )
    }