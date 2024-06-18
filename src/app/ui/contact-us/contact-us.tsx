import { MailIcon, PhoneIcon } from "lucide-react";
import Reveal from "../reveal";
import img from "../../../../public/images/day-office-travel-agency.jpg";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Textarea } from "src/components/ui/textarea";

export default function ContactUs() {
  return (
    <Reveal>
      <section
        id="contactus"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
        className="bg-no-repeat bg-cover py-16"
      >
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%] transition-all flex flex-col lg:flex-row mx-auto">
          <div className="left-section px-8 py-16 h-full w-full xl:w-[40%] bg-orange-400">
            <div className="uppercase px-4 py-2 rounded-full font-inter font-normal text-sm text-blue-800 bg-white w-min">
              <p>Contact</p>
            </div>
            <div className="mt-4">
              <p className="text-white font-inter font-medium text-lg">
                With a team of experienced linguists led by a married couple of
                language geeks, and a commitment to quality and client satisfaction,
                the WordsGeeks is your trusted partner for all your language-related
                requirements. Let’s bring your words to life, no matter the language
                or medium. Get in touch with us today to explore how we can help you
                communicate effectively on a global scale.
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <div className="rounded-full w-min p-4 bg-black/80">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div className="leading-6 ml-2">
                  <p className="font-inter font-normal">Call 24 hr/ 7 days</p>
                  <p className="text-xl text-white font-inter font-medium">
                    {"(+237)655 552 222"}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full mt-3 w-min p-4 bg-black/80">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>

                <div className="leading-6 ml-2">
                  <p className="font-inter font-normal">Send your mail</p>
                  <p className="text-xl text-white font-inter font-medium">
                    {"the.geekswords@gmail.com"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section px-8 pt-16 pb-8 text-lg xl:max-h-max w-full xl:w-[60%] font-inter font-medium bg-blue-500">
            <form action="">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-blue-400 ring-2 ring-blue-400 focus:ring-orange-500 w-full sm:w-1/2 text-white p-4 placeholder:text-white"
                />
                <Input
                  type="text"
                  placeholder="Email"
                  className="bg-blue-400 ring-2 ring-blue-400 focus:ring-orange-500 w-full sm:w-1/2 text-white p-4 placeholder:text-white"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 mt-4">
                <Input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-blue-400 ring-2 ring-blue-400 focus:ring-orange-500 w-full sm:w-1/2 text-white p-4 placeholder:text-white"
                />
                <Input
                  type="text"
                  placeholder="Choose Services"
                  className="bg-blue-400 ring-2 ring-blue-400 focus:ring-orange-500 w-full sm:w-1/2 text-white p-4 placeholder:text-white"
                />
              </div>
              <div className="mt-4">
                <Textarea
                  placeholder="Your Message"
                  name=""
                  id=""
                  rows={9}
                  className="bg-blue-400 ring-2 resize-none ring-blue-400 focus:ring-orange-500 w-full text-white p-4 placeholder:text-white"
                />
              </div>

              <Button className="bg-black/85 hover:bg-black/65 mt-2 text-white p-6 text-lg font-inter font-normal">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
