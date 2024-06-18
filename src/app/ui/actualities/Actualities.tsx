import { CalendarIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/components/ui/carousel";

export default function Actualities() {
  return (
    <section id="actualities" className="w-full mt-20 space-y-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Actualités
        </h2>
        <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Suivez les dernières avancés sur l&apos;autisme, l&apos;IA et leurs usages
          dans le depistage.
        </p>
      </div>
      <Carousel opts={{ align: "start", loop: true }} className="w-[90%] mx-auto">
        <CarouselContent className="w-full">
          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Blog Post Image"
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  <Link href="#" prefetch={false}>
                    Investing in the Stock Market: A Beginner&#39;s Guide
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover the fundamentals of stock investing and how to build a
                  diversified portfolio.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>John Doe</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>May 15, 2023</span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Blog Post Image"
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  <Link href="#" prefetch={false}>
                    Investing in the Stock Market: A Beginner&#39;s Guide
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover the fundamentals of stock investing and how to build a
                  diversified portfolio.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>John Doe</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>May 15, 2023</span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Blog Post Image"
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  <Link href="#" prefetch={false}>
                    Investing in the Stock Market: A Beginner&#39;s Guide
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover the fundamentals of stock investing and how to build a
                  diversified portfolio.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>John Doe</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>May 15, 2023</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
