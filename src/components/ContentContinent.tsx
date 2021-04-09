import React from 'react';
import {
  Flex,
  HStack,
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
  useMediaQuery,
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
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

  return (
    <Flex w="100vw" h="100%" px="1rem">
      <Flex
        h="100%"
        w="100%"
        maxW="1160px"
        mx="auto"
        py="4rem"
        direction={isLargerThan1200 ? 'row' : 'column'}
        alignItems="center"
        justifyContent={isLargerThan1200 ? 'space-between' : 'center'}
      >
        <Text
          lineHeight="9"
          letterSpacing="0.4px"
          w={isLargerThan1200 ? '55%' : '100%'}
          color="gray.700"
          fontWeight="400"
          fontSize={{ base: '1rem', md: '1.125rem', lg: '1.125rem' }}
        >
          {summary}
        </Text>
        <HStack
          mt={isLargerThan1200 ? '0' : '2rem'}
          w={isLargerThan1200 ? '35%' : '100%'}
          alignItems="center"
          justifyContent={isLargerThan1200 ? 'space-between' : 'center'}
          spacing={{ base: '1.5rem', md: '1.5rem', lg: '2rem' }}
        >
          <Box textAlign="center">
            <Heading color="yellow.400" fontWeight="600" fontSize="2rem">
              {countries}
            </Heading>
            <Text
              color="gray.700"
              fontWeight="600"
              fontSize={{ base: '1rem', md: '1.125rem', lg: '1.25rem' }}
            >
              countries
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading color="yellow.400" fontWeight="600" fontSize="2rem">
              {language}
            </Heading>
            <Text
              color="gray.700"
              fontWeight="600"
              fontSize={{ base: '1rem', md: '1.125rem', lg: '1.25rem' }}
            >
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
              fontSize={{ base: '1rem', md: '1.125rem', lg: '1.25rem' }}
            >
              cities +100
              <Popover closeOnBlur closeOnEsc flip isLazy>
                <PopoverTrigger>
                  <Icon
                    cursor="pointer"
                    _hover={{ color: 'yellow.400' }}
                    transition="color 0.2s"
                    ml="4px"
                    as={RiQuestionLine}
                  />
                </PopoverTrigger>
                <PopoverContent
                  position="absolute"
                  bg="gray.100"
                  top="3rem"
                  right="0"
                  color="gray.100"
                >
                  <PopoverHeader
                    fontSize={{ base: '0.875rem', md: '1rem', lg: '1rem' }}
                    fontWeight="600"
                    color="gray.700"
                  >
                    Facts about {title} continent
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton bg="#e5e5e5" color="gray.700" />
                  <PopoverBody
                    fontSize={{ base: '0.875rem', md: '1rem', lg: '1rem' }}
                    fontWeight="400"
                    color="gray.700"
                  >
                    {facts}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
}
