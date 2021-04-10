import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Banner from '../components/Banner';
import ContinentsSlide from '../components/ContinentsSlide';
import Header from '../components/Header';
import TravelTypes from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex maxW="100vw" overflowX="hidden" direction="column">
      <Head>
        <title>WorldTrip - Home</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <ContinentsSlide />
    </Flex>
  );
}
