import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

interface IBannerContinent {
  url: string;
  title: string;
}

export default function BannerContinent({ url, title }: IBannerContinent) {
  return (
    <Flex
      w="100vw"
      h="500px"
      px="1rem"
      bg={`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${url})`}
      bgPosition="center"
      bgSize="cover"
    >
      <Flex
        h="100%"
        maxW="1160px"
        w="100%"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          mb="-18rem"
          color="gray.100"
          fontWeight="500"
          fontSize={{ base: '2.5rem', md: '2.75rem', lg: '3rem' }}
        >
          {title}
        </Heading>
      </Flex>
    </Flex>
  );
}
