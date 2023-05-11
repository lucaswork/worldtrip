import { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import 'swiper/css';
import '@/styles/swiper.scss';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
export default MyApp;