import {
  CaptionsIcon,
  GlobeIcon,
  LanguagesIcon,
  MapPinIcon,
  NotebookIcon,
  NotebookPenIcon,
} from "lucide-react";
import Reveal from "../reveal";
import SectionHeader from "../section-header";
import ServiceCard from "../service-card";

export default function Services() {
  return (
    <Reveal>
      <section id="services" className="w-full px-4 mt-20 text-lg font-semibold">
        <Reveal>
          <SectionHeader
            title="Our Services ?"
            subtitle="Delivering top-notch linguistic services."
            subtitle2="At the WordsGeeks, we are passionate about language and dedicated to
              delivering top-notch linguistic services tailored to your needs. With a
              diverse range of offerings, we specialise in:"
          />
        </Reveal>

        <div className="mx-auto flex flex-wrap max-w-[1400px] place-content-center items-center mt-16">
          <ServiceCard
            title="Translation and Interpretation"
            subtitle="Seamlessly bridge language barriers with accurate and culturally
          sensitive translations and interpretations"
            icon={<LanguagesIcon size={40} className="mb-4" />}
          />

          <ServiceCard
            title="Copywriting and web content writing"
            subtitle="Captivate your audience with compelling copy and engaging web content that resonates across cultures"
            icon={<NotebookPenIcon size={40} className="mb-4" />}
          />

          <ServiceCard
            title="Localization"
            subtitle="Ensure your message is culturally relevant and resonates with your
            target audience worldwide through meticulous localization services"
            icon={<MapPinIcon size={40} className="mb-4" />}
          />

          <ServiceCard
            title="Subtitling"
            subtitle="Enhance the accessibility and reach of your multimedia content with
            professional subtitling services"
            icon={<CaptionsIcon size={40} className="mb-4" />}
          />

          <ServiceCard
            title="Other languages services"
            subtitle="From proofreading to transcreation, we offer a
            comprehensive suite of language solutions to meet your diverse needs"
            icon={<GlobeIcon size={40} className="mb-4" />}
          />
        </div>
      </section>
    </Reveal>
  );
}
