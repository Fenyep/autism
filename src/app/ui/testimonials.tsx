import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/components/ui/carousel";
import Reveal from "./reveal";
import SectionHeader from "./section-header";
import TestimonialCard from "./testimonial-card";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full px-4 py-4 my-24">
      <Reveal variant="to-bottom">
        <SectionHeader
          title="What they think ?"
          subtitle="What our clients says about us"
          subtitle2="Your Trusted Partner in Localizing Content and Communicating Across Languages"
        />
      </Reveal>

      <main className="mt-12 mx-auto w-[80%]">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                <div className="p-4">
                  <Reveal variant="zoom-out">
                    <TestimonialCard />
                  </Reveal>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-12 h-12" />
          <CarouselNext className="w-12 h-12" />
        </Carousel>
      </main>
    </section>
  );
}
