import React from 'react';
import { Flex, Text, Heading, Image } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Flex
      w="100vw"
      h="335px"
      bgImage="url(/assets/background.png)"
      bgPosition="center"
      bgSize="cover"
    >
      <Flex
        h="100%"
        maxW="1160px"
        w="100%"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          maxW="600px"
          display="flex"
          direction="column"
          align="start"
          justify="space-between"
        >
          <Heading color="gray.100" fontWeight="500" fontSize="2.25rem">
            7 Continents, infinite possibilities.
          </Heading>
          <Text mt="5" color="gray.300" fontSize="1.5rem">
            The time has come to take the trip you have always dreamed of off
            the drawing board.
          </Text>
        </Flex>
        <Image mb="-6rem" src="./assets/airplane.svg" />
      </Flex>
    </Flex>
  );
}
