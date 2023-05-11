import { ReactNode } from "react";

export interface ContinenProps {
  id: number
  name: string
  description: string
  image: string
}

export interface HomeProps {
  continents: ContinenProps[];
}

export interface ContinentsSlideProps {
  continents: ContinenProps[];
}

export interface ImageTypeProps {
  src: string;
  alt: string;
  children: string;
}

export interface CityBannerProps {
  name: string;
  image: string;
}

export interface CountryInfoAdditionalProps {
  amount: string;
  children: ReactNode;
}

export interface CityCardProps {
  cityImage: string;
  cityName: string;
  countryName: string;
  countryFlag: string;
}

export interface CityInfoProps {
  country: string;
  city: string;
  countryFlag: string;
}


export interface CityProps {
  countryName: string;
  name: string;
  flag: string;
  image: string;
}

export interface ContinentProps {
  name: string;
  description: string;
  fullDescription?: string;
  countries: string;
  languages: string;
  city: string;
  cityBannerImage: string;
  cities: CityProps[];
}
