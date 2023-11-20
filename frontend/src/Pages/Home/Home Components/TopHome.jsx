import React from 'react';
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Center,
  Input,
  Tooltip,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa'; // Importing heart icon from react-icons
import { imageData } from '../../../Data/HomeData/HomeData';



const TopHome = () => {
  return (
    <Container maxW={"full"}
    bg={`url('https://t4.ftcdn.net/jpg/04/40/59/97/360_F_440599783_NUI9tyl0B3EJSUQUF9IzZD84TNFwTP4x.jpg')`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      mt={0}
    
    >
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Order Your Food{' '}
          <Text as={'span'} color={'green'}>
            Made Easy{' '}
          </Text>
          <Text as={'span'} color={'red.400'}>
            Now At Gobindopur!!
          </Text>
          <Flex m={'15px auto 5px auto'} w={'60%'} gap={5}>
            <Input placeholder='Enter Your Location' border={"1px solid black"} />
            <Button colorScheme='green'>Discover</Button>
          </Flex>
        </Heading>
        <Text fontWeight={"bold"} color={'#1525b3'} maxW={'3xl'}>
          Never miss a meal. Never be late for one too. Keep track of your food items and receive smart reminders at
          appropriate times. Read your smart "Daily Menu" every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>

        <Center>
          <Flex w={'full'} gap={6} direction={{base : "column", sm : "row"}}>
            {imageData.map((item) => (
              <Tooltip key={item.id} label={item.title}>
                <Flex
                  direction={"column"}
                  align="center"
                  justify="center"
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="lg"
                  transition="transform 0.3s"
                  _hover={{ transform: 'scale(1.05)' }}>
                  <Image
                    h={'300px'}
                    w={'400px'}
                    objectFit="cover"
                    src={item.link}
                    alt={item.title}
                  />
                  <Stack p={4} bg="white" width="100%">
                    <Text fontWeight="bold">{item.title}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {item.description}
                    </Text>
                    <Button mt={3} colorScheme="red" leftIcon={<FaHeart />}>
                      Add to Favorites
                    </Button>
                  </Stack>
                </Flex>
              </Tooltip>
            ))}
          </Flex>
        </Center>
      </Stack>
    </Container>
  );
};

export default TopHome;
