import React from 'react';
import {
  Flex,
  Text,
  Box,
  Heading,
  Icon,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Popover,
} from '@chakra-ui/react';
import { RiQuestionLine } from 'react-icons/ri';

interface IContentContinent {
  title: string;
  countries: number;
  cities: number;
  language: number;
  facts: string;
  summary: string;
}

export default function ContentContinent({
  title,
  countries,
  cities,
  language,
  facts,
  summary,
}: IContentContinent) {
  return (
    <Flex w="100vw" h="100%">
      <Flex
        h="100%"
        maxW="1160px"
        w="100%"
        mx="auto"
        py="4rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          lineHeight="9"
          letterSpacing="0.4px"
          w="55%"
          color="gray.700"
          fontWeight="400"
          fontSize="1rem"
        >
          {summary}
        </Text>
        <Flex w="35%" alignItems="center" justifyContent="space-between">
          <Box textAlign="center">
            <Heading color="yellow.400" fontWeight="600" fontSize="2rem">
              {countries}
            </Heading>
            <Text color="gray.700" fontWeight="600" fontSize="1.25rem">
              countries
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading color="yellow.400" fontWeight="600" fontSize="2rem">
              {language}
            </Heading>
            <Text color="gray.700" fontWeight="600" fontSize="1.25rem">
              languages
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading color="yellow.400" fontWeight="600" fontSize="2rem">
              {cities}
            </Heading>
            <Text
              position="relative"
              color="gray.700"
              fontWeight="600"
              fontSize="1.25rem"
            >
              cities +100
              <Popover closeOnBlur closeOnEsc flip isLazy>
                <PopoverTrigger>
                  <Icon ml="4px" as={RiQuestionLine} />
                </PopoverTrigger>
                <PopoverContent
                  position="absolute"
                  bg="yellow.400"
                  top="3rem"
                  right="0"
                  color="gray.100"
                >
                  <PopoverHeader fontWeight="semibold">
                    Popover placement
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton bg="black" color="white" />
                  <PopoverBody
                    fontSize="1rem"
                    fontWeight="400"
                    color="gray.100"
                  >
                    {facts}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
