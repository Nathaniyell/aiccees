import red from "../../../public/images/home/red.png"
import amber from "../../../public/images/home/amber.png";
import green from "../../../public/images/home/green.png";
import Image from "next/image";
import CustomButton from "../button/button";
import Link from "next/link";
import { motion } from "framer-motion";

const info = [
  {
    id: 1,
    image: red,
    text: "Abstract/Full Paper Submission",
    date: "Feb. 1st 2024",
  },
  {
    id: 2,
    image: amber,
    text: "Abstract/Full Paper Submission Deadline",
    date: "Aug. 31st 2024",
  },
  {
    id: 3,
    image: green,
    text: "Conference Date",
    date: "Sept. 26th & 27th 2024",
  },
];

function Submissions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: false }}
      className="bg-[#0A4F25] h-auto lg:h-[50vh] py-5"
    >
      <div className="w-[85%] my-0 mx-auto text-white">
        <p className="text-[12px] text-center">AICCEES 2024</p>
        <h1 className="text-2xl font-bold text-center font-header">
          CALL FOR ABSTRACTS/FULL RESEARCH PAPER SUBMISSION
        </h1>
        <br />
        <br />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-4">
          {info.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-full h-14  text-primarytext px-3"
            >
              <div className="w-[70%] flex items-center gap-2">
                <Image src={item.image} />
                <p className="text-sm ">{item.text}</p>
              </div>
              <p className="text-[13px] font-bold">{item.date}</p>
            </div>
          ))}
        </div>
        <br className="md:block" />
        <br className="hidden lg:block" />

        <Link
          href="https://drive.google.com/uc?export=download&id=1ELqJouaYKzQEUku8cHR0K_rup48C5I0B"
          className="flex justify-center"
        >
          <CustomButton variant="primary">DOWNLOAD BROCHURE </CustomButton>
        </Link>
      </div>
    </motion.div>
  );
}

export default Submissions;
