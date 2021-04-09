import React from 'react';
import { Flex, Text, Heading, Image, useMediaQuery } from '@chakra-ui/react';

export default function Banner() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');

  return (
    <Flex
      w="100vw"
      h={isLargerThan1000 ? '335px' : '435px'}
      bgImage="url(/assets/background.png)"
      bgPosition="center"
      bgSize="cover"
      px="1rem"
    >
      <Flex
        h="100%"
        maxW="1160px"
        w="100%"
        mx="auto"
        display="flex"
        direction={isLargerThan1000 ? 'row' : 'column'}
        alignItems="center"
        justifyContent={isLargerThan1000 ? 'space-between' : 'center'}
      >
        <Flex
          maxW="600px"
          display="flex"
          direction="column"
          align="start"
          justify="space-between"
        >
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
          >
            7 Continents, infinite possibilities.
          </Heading>
          <Text
            mt="5"
            color="gray.300"
            fontSize={{ base: '1rem', md: '1.125rem', lg: '1.25rem' }}
          >
            The time has come to take the trip you have always dreamed of off
            the drawing board.
          </Text>
        </Flex>
        <Image mb="-6rem" src="./assets/airplane.svg" />
      </Flex>
    </Flex>
  );
}
