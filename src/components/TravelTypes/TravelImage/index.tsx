import React from 'react';
import {
  Image,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ImageTypeProps } from '@/types';


const TravelImage: React.FC<ImageTypeProps> = ({src, alt, children}) => {
  const MotionStack = motion<StackProps>(Stack);
  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  return (
    <MotionStack
      direction={['row', 'column']}
      align="center"
      justify="center"
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      {!isWideVersion && <Image src="/elipse.svg" alt="Ponto amarelo" />}
      {isWideVersion && <Image src={src} alt={alt} />}
      <Text fontWeight="medium" mt="6" color="dark.heading" lineHeight="6">
        {children}
      </Text>
    </MotionStack>
  )
}

export default TravelImage;