import React from 'react';
import { Box, Image, Text, Button, Flex, Heading } from '@chakra-ui/react';

const chefDetails = [
  {
    id: 1,
    chefName: "Jone Doe",
    image: "https://i.guim.co.uk/img/media/3cfd4dc25e5f1dbc378ab3adc817a1081264a5df/0_224_6720_4032/master/6720.jpg?width=620&dpr=2&s=none",
    experience: {
      hotel: "Taj Hotel, Mumbai",
      year: 4,
    },
  },
  {
    id: 2,
    chefName: "Jeson Roy",
    image: "https://i.guim.co.uk/img/media/3cfd4dc25e5f1dbc378ab3adc817a1081264a5df/0_224_6720_4032/master/6720.jpg?width=620&dpr=2&s=none",
    experience: {
      hotel: "Taj Homtel, Mumbai",
      year: 4,
    },
  },
  {
    id: 3,
    chefName: "Sophie Smith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    experience: {
      hotel: "Grand Plaza Hotel, New York",
      year: 5,
    },
  },
  {
    id: 4,
    chefName: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    experience: {
      hotel: "Ritz-Carlton, Paris",
      year: 7,
    },
  }
];

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
