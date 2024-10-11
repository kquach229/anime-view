import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
const CarouselComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel>
      <CarouselContent className='-ml-4'>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
