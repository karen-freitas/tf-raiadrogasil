import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

import '../../styles/loader.css'

export default function Loader() {

  return (

    <div className="loader-container">
      <CircularProgress color="success" className='loader' size={100} sx={{color:'#285035'}} thickness={5} />
    </div >
  )
}