import React from 'react';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Flex, Image, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

export default function Header() {
  const { asPath } = useRouter();

  const notHomePage = asPath !== '/';

  return (
    <Flex as="header" h="100%" w="100%" py="1rem">
      <Flex w="100%" maxW="1160px" mx="auto" align="center" justify="center">
        <Link href="/">
          <Icon
            cursor="pointer"
            style={{ opacity: notHomePage ? '1' : '0' }}
            as={RiArrowLeftSLine}
            mr="auto"
            fontSize="32"
          />
        </Link>
        <Image mr="auto" src="/assets/Logo.svg" />
      </Flex>
    </Flex>
  );
}
