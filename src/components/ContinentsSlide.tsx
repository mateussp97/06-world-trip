import React from 'react';
import Link from 'next/link';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { ContinentsSlide as data } from './../data/ContinentsSlide';
// Import Swiper React components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function ContinentsSlide() {
  return (
    <Flex
      w="100%"
      h="100%"
      pt="5rem"
      pb="3rem"
      px="1rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Heading
        textAlign="center"
        fontSize={{ base: '1.75rem', md: '2rem', lg: '2rem' }}
        fontWeight="500"
        color="gray.700"
        mb="3rem"
      >
        Shall we go for it?
        <br />
        Then choose your continent
      </Heading>
      <Flex w="100%" maxW="1160px" h="450px">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
          }}
          style={{ width: '100%', flex: '1' }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.title}>
              <Flex
                w="100%"
                h="100%"
                px="1rem"
                bg={`linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${item.url})`}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
              >
                <Heading
                  color="gray.100"
                  fontWeight="700"
                  fontSize={{ base: '2rem', md: '2.5rem', lg: '3rem' }}
                  wordBreak="break-word"
                >
                  {item.title}
                </Heading>

                <Text
                  maxW="400px"
                  mt="0.5rem"
                  color="gray.100"
                  fontWeight="700"
                  fontSize={{
                    base: '1.125rem',
                    md: '1.25rem',
                    lg: '1.25rem',
                  }}
                >
                  {item.description}
                </Text>
                <Link href={`/continents/${item.slug}`}>
                  <Button colorScheme="yellow" mt="2rem">
                    See more
                  </Button>
                </Link>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
}
