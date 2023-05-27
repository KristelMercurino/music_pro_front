import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loading = () => {
    return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="90vh"
        >
          <CircularProgress />
        </Box>
      );
};

export default Loading;
