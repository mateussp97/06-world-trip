import { Flex } from '@chakra-ui/react';
import Banner from '../components/Banner';
import ContinentsSlide from '../components/ContinentsSlide';
import Header from '../components/Header';
import TravelTypes from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex maxW="100vw" overflowX="hidden" direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <ContinentsSlide />
    </Flex>
  );
}
