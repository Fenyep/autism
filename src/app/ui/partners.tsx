import Image, { StaticImageData } from "next/image";
import img1 from "../../../public/images/3m.svg";
import img2 from "../../../public/images/barstool-store.svg";
import img3 from "../../../public/images/budweiser.svg";
import img4 from "../../../public/images/buzzfeed.svg";
import img5 from "../../../public/images/forbes.svg";
import img6 from "../../../public/images/macys.svg";
import img7 from "../../../public/images/menshealth.svg";
import img8 from "../../../public/images/mrbeast.svg";
import Reveal from "./reveal";

const partners: { logo: StaticImageData; alt: string }[] = [
  { logo: img1, alt: "img1" },
  { logo: img2, alt: "img2" },
  { logo: img3, alt: "img3" },
  { logo: img4, alt: "img4" },
  { logo: img5, alt: "img5" },
  { logo: img6, alt: "img6" },
  { logo: img7, alt: "img7" },
  { logo: img8, alt: "img8" },
];

export default function Partners() {
  return (
    <Reveal>
      <section
        id="partners"
        className="w-full mt-12 logos inline-flex overflow-hidden flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
      >
        {[0, 1].map((e) => (
          <ul
            key={e}
            className="flex logos-slide items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-slide"
          >
            {partners.map((e, idx) => (
              <li key={e.alt + idx}>
                <Image
                  className="h-[25px] mx-[10px] md:h-[50px] md:mx-[20px]"
                  src={e.logo}
                  alt={e.alt}
                  width={150}
                />
              </li>
            ))}
          </ul>
        ))}
      </section>
    </Reveal>
  );
}
