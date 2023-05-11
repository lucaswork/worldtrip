import { ContinenProps } from '@/types';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';


export function Slide({
  description,
  image,
  name,
  id,
}: ContinenProps) {
  return (
    <Flex
      w="100%"
      height={['250px', '250px', '450px']}
      backgroundPosition="100% 30%"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      bgImage={`url('${image}')`}
      align="center"
      justify="center"
      direction="column"
    >
      <Link href={`/continent/${id}`}>
        <Heading
          color="light.heading"
          fontSize={['2xl', '2xl', '5xl']}
          lineHeight="10"
        >
          {name}
        </Heading>
      </Link>
      <Text
        color="light.info"
        mt="4"
        fontWeight="bold"
        fontSize={['sm', 'sm', '2xl']}
      >
        {description}
      </Text>
    </Flex>
  );
}