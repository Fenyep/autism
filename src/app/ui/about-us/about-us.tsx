import Image from "next/image";
import SectionHeader from "../section-header";
import Reveal from "../reveal";
import img from "../../../../public/images/medium-shot-woman-working-travel-agency.jpg";

export default function AboutUs() {
  return (
    <Reveal>
      <div className="w-full mt-16 mb-8 px-4 pt-4 text-lg font-semibold">
        <Reveal>
          <SectionHeader
            title="Who we are ?"
            subtitle="Trusted Partner in Localizing Content"
            subtitle2="Your Trusted Partner in Localizing Content and Communicating Across Languages"
          />
        </Reveal>

        <article className="mt-24 w-[80%] lg:w-[75%] xl:w-[65%] 2xl:w[50%] mx-auto flex flex-col md:flex-row gap-8 xl:gap-16">
          <div className="w-full md:w-1/3 flex justify-end">
            <Reveal variant="to-left">
              <Image src={img} alt="" width={250} height={500} />
            </Reveal>
          </div>
          <div className="w-full lg:w-2/3">
            <Reveal variant="to-right">
              <div className="py-2 px-4 bg-orange-100 w-max rounded-full">
                <p className="text-orange-600 text-sm font-inter font-light uppercase">
                  Who we are
                </p>
              </div>

              <p className="text-3xl lg:text-4xl font-inter font-semibold mt-6">
                Trusted Translation Agency Established Since 2016
              </p>

              <p className="font-inter font-normal text-black/50 mt-4">
                Earning the trust of our clientele through consistently superior
                service and a proven track record of resolving plumbing challenges
                with precision and proficiency.
              </p>
            </Reveal>
          </div>
        </article>

        <Reveal variant="to-bottom">
          <article className="mt-24  w-[80%] lg:w-[75%] xl:w-[65%] 2xl:w[50%] mx-auto flex flex-col md:flex-row-reverse gap-8 xl:gap-16">
            <div className="w-full md:w-1/3 flex justify-start">
              <Reveal variant="to-left">
                <Image src={img} alt="" width={250} height={500} />
              </Reveal>
            </div>
            <div className="w-full lg:w-2/3">
              <Reveal variant="to-right">
                <div className="py-2 px-4 bg-orange-100 w-max rounded-full">
                  <p className="text-orange-600 text-sm font-inter font-light uppercase">
                    Who we are
                  </p>
                </div>

                <p className="text-4xl font-inter font-semibold mt-6">
                  Trusted Translation Agency Established Since 2016
                </p>

                <p className="font-inter font-normal text-black/50 mt-4">
                  Earning the trust of our clientele through consistently superior
                  service and a proven track record of resolving plumbing challenges
                  with precision and proficiency.
                </p>
              </Reveal>
            </div>
          </article>
        </Reveal>
      </div>
    </Reveal>
  );
}
