import Image from "next/image";
import logo from "../../../public/images/TWGlogoDeclination2.png";
import Link from "next/link";
import {
  Facebook,
  FacebookIcon,
  LinkedinIcon,
  MessageCircleIcon,
  XIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full max-h-[1800px] px-4 lg:px-16 mt-28 mb-8 flex flex-col justify-between pt-4 text-xl font-bold">
      <div className="flex flex-col min-[950px]:flex-row justify-between items-start mb-20">
        <div className="w-80">
          <Image src={logo} alt="The Word Geeks logo" width={250} />
        </div>

        <div className="grid min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transition-all mt-16 min-[950px]:mt-0 justify-around">
          <div className="">
            <p className="font-inter font-light text-3xl">Services</p>
            <div className="font-inter font-light text-base">
              <p className="mt-4">Conference Interpreting</p>
              <p className="mt-4">Translation And Localization</p>
              <p className="mt-4">Services</p>
              <p className="mt-4">Proofreading</p>
              <p className="mt-4">Transcreation</p>
              <p className="mt-4">Subtitle</p>
              <p className="mt-4">Transcription</p>
            </div>
          </div>
          <div className="">
            <p className="font-inter font-light text-3xl">Pages</p>
            <div className="font-inter font-light text-base">
              <ul>
                <li className="mt-4">
                  <Link
                    href={"/about-us"}
                    className="hover:text-orange-500 hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li className="mt-4">
                  <Link
                    href={"/services"}
                    className="hover:text-orange-500 hover:underline"
                  >
                    Services
                  </Link>
                </li>

                <li className="mt-4">
                  <Link
                    href={"/contact-us"}
                    className="hover:text-orange-500 hover:underline"
                  >
                    Contact
                  </Link>
                </li>

                <li className="mt-4">
                  <Link
                    href={"/#"}
                    className="hover:text-orange-500 hover:underline"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mt-4">
                  <Link
                    href={"/#"}
                    className="hover:text-orange-500 hover:underline"
                  >
                    Project
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="font-inter font-light text-3xl">Industries</p>
            <div className="font-inter font-light text-base">
              <p className="mt-4">Banking & Finance</p>
              <p className="mt-4">eLearning</p>
              <p className="mt-4">Marketing</p>
              <p className="mt-4">eCommerce</p>
              <p className="mt-4">Autmotive</p>
              <p className="mt-4">Healthcare</p>
              <p className="mt-4">Gaming</p>
              <p className="mt-4">Legal And Law</p>
              <p className="mt-4">Travel And Tourism</p>
              <p className="mt-4">Education</p>
              <p className="mt-4">Technical And Manufacturing</p>
            </div>
          </div>
          <div>
            <p className="font-inter font-light text-3xl">Follow</p>
            <div className="font-inter font-light text-base">
              <p className="mt-4 flex">
                <span className="mr-2">
                  <a href="#" className="hover:text-orange-500 hover:underline">
                    X (previously Twitter)
                  </a>
                </span>
                <XIcon className="w-6 h-6" />
              </p>
              <p className="mt-4 flex">
                <span className="mr-2">
                  <a href="#" className="hover:text-orange-500 hover:underline">
                    Facebook
                  </a>
                </span>
                <FacebookIcon className="w-6 h-6" />
              </p>
              <p className="mt-4 flex">
                <span className="mr-2">
                  <a href="#" className="hover:text-orange-500 hover:underline">
                    LinkedIn
                  </a>
                </span>
                <LinkedinIcon className="w-6 h-6" />
              </p>
              <p className="mt-4 flex">
                <span className="mr-2">
                  <a href="#" className="hover:text-orange-500 hover:underline">
                    Whatsapp
                  </a>
                </span>
                <MessageCircleIcon className="w-6 h-6" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-1 border-black/20" />
      <p className="text-center text-sm mt-2 font-inter font-light">
        {`Copyright © ${new Date(
          Date.now()
        ).getFullYear()} The WordGeeks, All right Reserved | Designed by EurekaDev`}
      </p>
    </footer>
  );
}
