import { Box } from '@material-ui/system';
import React from 'react';
import '../../styles/ContainerList.css';


const ContainerList = ({ children }) => {
  return (
    <Box className="ContainerList">
     
      {children}
    </Box>
  );
};

export default ContainerList;