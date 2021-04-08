import React from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Flex, Image, Icon } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex as="header" h="100%" w="100%" py="1rem">
      <Flex w="100%" maxW="1160px" mx="auto" align="center" justify="center">
        <Icon as={RiArrowLeftSLine} mr="auto" fontSize="32" />
        <Image mr="auto" src="/assets/Logo.svg" />
      </Flex>
    </Flex>
  );
}
