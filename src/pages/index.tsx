import { GetStaticProps } from 'next';
import { Box, Flex, Heading, SkeletonText } from '@chakra-ui/react';
import Head from 'next/head';
import { ContinentsSlide } from '@/components/ContinentsSlide';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TravelTypes } from '@/components/TravelTypes';
import { api } from '@/services/api';
import { ContinenProps, HomeProps } from '@/types';



export default function Home({ continents }: HomeProps) {
  return (
    <Flex
      w="100%"
      maxWidth={1366}
      h="100vh"
      flexDirection="column"
      align="center"
      mx="auto"
    >
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Header />
      <Hero />
      <Flex my={[9, 9, 20]} align="center" flexDirection="column">
        <TravelTypes />
        <Box
          w="24"
          pt={[9, 9, 20]}
          borderBottom="2px"
          borderColor="dark.heading"
        />
        <SkeletonText isLoaded>
          <Heading
            textAlign="center"
            color="dark.heading"
            fontWeight="medium"
            fontSize={['xl', 'xl', '4xl']}
            marginY={[6, 6, 14]}
          >
            Vamos Nessa? <br /> Então escolha seu continente
          </Heading>
        </SkeletonText>
      </Flex>
      <ContinentsSlide continents={continents} />
    </Flex>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const {data} = await api.get<ContinenProps[]>('/continents')

  const continents = data.map((continent) => {
    return {
      id: continent.id,
      name: continent.name,
      description: continent.description,
      image: continent.image,
    };
  });

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 48, //48horas
  };
};