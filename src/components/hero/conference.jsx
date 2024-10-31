"use client";

import Image from "next/image";
import CustomButton from "../button/button";
import clockIcon from "../../../public/images/aicess/clock.png";
import { usePathname } from "next/navigation";
import CountdownTimer from "../countdown/timer";
import Link from "next/link";

function ConferenceHero({ HeroImg, title, description, image }) {
  // const pathname = usePathname();
  // const isAiccess = pathname === "/tovero";

  return (
    <div className="h-auto lg:h-screen flex justify-between relative pb-8 mb-8 lg:mb-0 lg:pb-0">
      <div className="flex flex-col md:flex-row justify-between md:justify-center">
        <div
          className={`w-full md:w-[90%] lg:w-1/2 flex flex-col justify-center`}
        >
          <div className="w-[85%] my-0 mx-auto">
            <div className="flex justify-center">
              <Image src={image} alt="conference image" />
            </div>

            <div>
              <div className="font-header text-xl lg:text-4xl mb-2">
                <h1 className="font-header text-center text-ltgreentext">
                  {title}
                </h1>
              </div>

              <p className="text-redtext text-sm font-bold text-center">
                {description}
              </p>
            </div>
            <br />

            <div className="flex flex-col items-center gap-4 md:gap-10">
              <Link href="">
              {/* <Link href="https://forms.office.com/r/3Hxp8z38uA"> */}
                <CustomButton
                  variant="primary"
                  className="order-2 md:order-1"
                >
                  Register
                </CustomButton>
              </Link>
              <div className="w-full gap-2 flex items-center justify-center bg-cardbg py-5 md:py-1 order-1 md:order-2">
                {/* <Image src={clockIcon} alt="clock icon" />
                <CountdownTimer /> */}
                <a download href="../../../public/Conference agenda and BOA.pdf" className="bg-green-700 text-white px-4 py-2 rounded-lg text-center">Download Conference Program</a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:justify-end">
          <Image src={HeroImg} alt="Hero Image" />
        </div>
      </div>
      <div className="w-full h-5 bg-red-600 absolute -z-10 -bottom-8 lg:bottom-0 pr-16"></div>
    </div>
  );
}

export default ConferenceHero;
