import React from 'react';
import { Flex, Text, Box, Heading } from '@chakra-ui/react';

interface IContentContinent {
  countries: number;
  cities: number;
  language: number;
  summary: string;
}

export default function ContentContinent({
  countries,
  cities,
  language,
  summary,
}: IContentContinent) {
  return (
    <Flex w="100vw" h="100%">
      <Flex
        h="100%"
        maxW="1160px"
        w="100%"
        mx="auto"
        py="5rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          lineHeight="9"
          letterSpacing="0.4px"
          w="60%"
          color="gray.700"
          fontWeight="400"
          fontSize="1.25rem"
        >
          {summary}
        </Text>
        <Flex w="35%" alignItems="center" justifyContent="space-between">
          <Box textAlign="center">
            <Heading color="yellow.400" fontWeight="600" fontSize="3rem">
              {countries}
            </Heading>
            <Text color="gray.700" fontWeight="600" fontSize="1.5rem">
              countries
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading color="yellow.400" fontWeight="600" fontSize="3rem">
              {language}
            </Heading>
            <Text color="gray.700" fontWeight="600" fontSize="1.5rem">
              languages
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading color="yellow.400" fontWeight="600" fontSize="3rem">
              {cities}
            </Heading>
            <Text color="gray.700" fontWeight="600" fontSize="1.5rem">
              cities
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
