import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './Slide';
import { ContinentsSlideProps } from '@/types';

export function ContinentsSlide({ continents }: ContinentsSlideProps) {
  return (
    <Flex w="100%" maxW="1240px" paddingBottom={['5', '5', '10']}>
      <Swiper
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Slide
              id={continent.id}
              name={continent.name}
              image={continent.image}
              description={continent.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}

