import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Image, Tooltip } from "@chakra-ui/react";

export const Header: React.FC = () => {
  const { asPath } = useRouter();

  const homePagePath = "/";
  const isHomePage = homePagePath === asPath;
  return (
    <Flex as="header" mx="auto" maxWidth={1366} align="center" w="100%" h="24">
      {!isHomePage && (
        <Link href="/">
          <Tooltip label="Voltar" closeDelay={200}>
            <IconButton
              marginLeft={["10", "16"]}
              bg="transparent"
              fontSize="3xl"
              aria-label="Voltar"
              icon={<ChevronLeftIcon />}
            />
          </Tooltip>
        </Link>
      )}
      <Flex align="center" w="100%" justify="center">
        <Image src="/logo.svg" alt="worldTrip" paddingY={7} />
      </Flex>
    </Flex>
  );
};
