import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TravelImage from "./TravelImage";

export const TravelTypes: React.FC = () => {
  const travelTypes = [
    { src: "/cocktail.svg", alt: "Cocktail", caption: 'vida noturna' },
    { src: "/beach.svg", alt: "Praia", caption: 'praia'},
    { src: "/building.svg", alt: "Edifício", caption: 'moderno' },
    { src: "/museum.svg", alt: "Museu", caption: 'clássico' },
    { src: "/earth.svg", alt: "Mundo", caption: 'ver mais...' },
  ];
  return (
    <SimpleGrid
      spacing={["6", "6", "36"]}
      columns={[2, 2, 5]}
      alignItems="center"
      justifyItems="center"
    >
      {travelTypes.map((t, index: number) =>
        <TravelImage key={index} src={t.src} alt={t.alt}>
          {t.caption}
        </TravelImage>
      )}
    </SimpleGrid>
  );
};
