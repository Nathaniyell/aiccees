import Image from "next/image";

function IdenticalHero({ title, description, HeroImg }) {
  return (
    <div className="h-auto lg:h-screen flex flex-col lg:flex-row justify-between relative pb-8 lg:pb-0 mb-8 lg:mb-0">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-16 ">
        <div className="font-header text-4xl mb-2 text-prigreentext">
          <h1 className="font-header text-center md:text-left text-4xl">
            {title}
          </h1>
        </div>

        <p className="ptag text-center md:text-justify mb-2">{description}</p>
      </div>
      <div className="flex justify-start md:justify-center lg:justify-end">
        <Image src={HeroImg} alt="Hero Image" className="hidden md:block" />
      </div>
      <div className="w-full h-5 bg-red-600 absolute -z-10 -bottom-8 md:bottom-0 pr-16"></div>
    </div>
  );
}

export default IdenticalHero;
