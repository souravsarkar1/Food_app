import React from 'react';
import TopHome from '../Home Components/TopHome';
import { Box } from '@chakra-ui/react';
import ImageSlider from '../Home Components/Image slider';
import Chef from '../Home Components/Chef';

const Home = () => {
  return (
    <Box>
      <TopHome />
      <ImageSlider/>
      <Chef/>
    </Box>
  );
};

export default Home;
