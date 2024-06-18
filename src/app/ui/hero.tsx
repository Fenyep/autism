import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "src/components/ui/carousel";
import Image from "next/image";
import React from "react";

import img from "../../../public/images/garcon-faisant-seance-ergotherapie.jpg";
import img2 from "../../../public/images/front-view-smiley-girl-making-puzzle.jpg";
import img3 from "../../../public/images/vue-laterale-homme-garcon-lisant-bandes-dessinees-maison.jpg";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full mx-auto"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={img}
                  width={1200}
                  height={600}
                  alt="Hero Image 1"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    Dépistage de l&apos;autisme
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg">
                    Dépistage Précoce, Interventions Précieuses.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={img2}
                  width={1200}
                  height={600}
                  alt="Hero Image 2"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    Expertise et Compassion
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg">
                    Combinaisons de l&apos;expertise médicale et l&apos;IA pour
                    offrir les meilleurs soins possibles.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={img3}
                  width={1200}
                  height={600}
                  alt="Hero Image 3"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    Ressources et Éducation
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg">
                    Nous croyons en l&apos;éducation et en l&apos;autonomisation.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-white hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-white hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <ChevronRightIcon className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </CarouselNext>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            <div />
            <div />
            <div />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

const ChevronLeftIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ ...props }, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
});

ChevronLeftIcon.displayName = "ChevronLeftIcon";

const ChevronRightIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ ...props }, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
});

ChevronRightIcon.displayName = "ChevronRightIcon";
