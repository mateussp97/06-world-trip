import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header';
import { ContinentPage as data } from '../../data/ContinentPage';
import BannerContinent from '../../components/BannerContinent';
import ContentContinent from '../../components/ContentContinent';

export default function Continent() {
  const { asPath } = useRouter();

  const continent = data
    .filter((item) => item.slug === asPath)
    .map((item) => (
      <Flex key={item.slug} maxW="100vw" overflowX="hidden" direction="column">
        <Header />
        <BannerContinent title={item.title} url={item.url} />
        <ContentContinent
          cities={item.cities}
          countries={item.countries}
          language={item.language}
          summary={item.summary}
        />
      </Flex>
    ));

  return continent;
}
