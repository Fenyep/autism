import { StaticImageData } from "next/image";
import img1 from "../../public/images/day-office-travel-agency.jpg";
import img2 from "../../public/images/side-view-woman-working-as-travel-agent.jpg";
import img3 from "../../public/images/young-african-woman-wearing-operator-headset-holding-hola-word-screaming-proud-celebrating-victory-success-very-excited-with-raised-arm.jpg";

export const data: {
  img: StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  link: string;
}[] = [
  {
    img: img1,
    alt: "",
    title: "The WordsGeeks",
    subtitle: `<p>Your language solutions <span className="text-xl font-inter font-semibold">Partner<span></p>`,
    link: "",
  },
  {
    img: img2,
    alt: "",
    title: "We do not translate...",
    subtitle: `<p>We convey <span className="text-xl font-inter font-semibold">thoughts, emotions and feelings<span>!</p>`,
    link: "",
  },
  {
    img: img3,
    alt: "",
    title: "Entrust us with a unique assignment",
    subtitle: `<p>Building your <span className="text-xl font-inter font-semibold">Reputation</span></p>`,
    link: "",
  },
  {
    img: img3,
    alt: "",
    title: "Though these are powerful",
    subtitle: `<p>AIs are <span className="text-xl font-inter font-semibold">Mere tools</span>!</p>`,
    link: "",
  },
  {
    img: img3,
    alt: "",
    title: "Words Geeks",
    subtitle: `<p>Your <span className="text-xl font-inter font-semibold">Gateaway</span> to <span className="text-xl font-inter font-semibold">Global communication</span> </p>`,
    link: "",
  },
];
