import React from 'react';
import { Flex, Box, Text, Heading, Image } from '@chakra-ui/react';

interface ICityCard {
  url?: string;
  name?: string;
  country?: string;
  flag?: string;
}

export default function CityCard({ url, name, country, flag }: ICityCard) {
  return (
    <Flex
      w="256px"
      h="279px"
      direction="column"
      borderRadius="8px"
      overflow="hidden"
      boxShadow="6px 6px 16px rgba(0,0,0, 0.10)"
    >
      <Box
        h="100%"
        w="100%"
        bgImage={`url(${url})`}
        bgPosition="center"
        bgSize="cover"
      />
      <Flex w="100%" align="center" justify="space-between" px="1.25rem">
        <Flex w="100%" direction="column" my="1.25rem">
          <Heading color="gray.700" fontWeight="500" fontSize="1.25rem">
            {name}
          </Heading>
          <Text mt="0.5rem" color="gray.500" fontSize="1rem">
            {country}
          </Text>
        </Flex>
        {flag ? <Image width="30px" height="30px" src={flag} /> : null}
      </Flex>
    </Flex>
  );
}
