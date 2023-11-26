import React from 'react';
import { Box, Image, Text, Button, Flex, Heading } from '@chakra-ui/react';
import { chefDetails } from '../../../Data/HomeData/HomeData';



const Chef = () => {
  return (
    <Box>
    <Heading> Our Chefs</Heading>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      {chefDetails.slice(0,4).sort((a,b)=>a.experience-b.experience).map((chef) => (
        <Box
          key={chef.id}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          m={4}
          _hover={{
            transform: 'scale(1.05)',
            transition: 'transform 0.3s',
          }}
        >
          <Image src={chef.image} alt={chef.chefName} h="200px" w="300px" objectFit="cover" />
          <Box p="6">
            <Text fontWeight="semibold" fontSize="xl" mb="2">
              {chef.chefName}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {chef.experience.hotel} - {chef.experience.year} years
            </Text>
            <Button mt="4" colorScheme="teal" variant="outline">
              View Profile
            </Button>
          </Box>
        </Box>
      ))}
    </Flex>
    </Box>
  );
};

export default Chef;
