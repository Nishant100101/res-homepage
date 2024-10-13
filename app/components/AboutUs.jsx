import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="pb-16 px-10 bg-white text-[#0F1212]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:w-1/2">
          <div className="col-span-2 lg:col-span-1 lg:row-span-2">
            <Image
              src="/assets/img/about/about-1.jpg"
              alt="Haircut 1"
              width={350}
              height={460}
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="col-span-1">
            <Image
              src="/assets/img/about/about-2.jpg"
              alt="Haircut 2"
              width={150}
              height={170}
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="col-span-1">
            <Image
              src="/assets/img/about/about-3.jpg"
              alt="Haircut 3"
              width={300}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        <div className="lg:w-1/2 lg:ml-10 text-center lg:text-left">
          <span className="text-customGold text-lg font-bold max-xl-1451:font-black">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Best Haircut Salons <br /> For Men & Women
          </h2>
          <p className="font-normal mb-4">
            “Haircut” is a term used to describe when a person removes the hair
            on their head. This is done to allow for better access to the part
            of the body that needs cutting.
          </p>
          <p className="font-normal mb-6">
            We’re a leading independent salon in Dubai, offering everything from
            haircuts to exfoliation and more.
          </p>
          <a
            href="#"
            className="w-[190px] h-[60px] gap-[10px] px-[41px] py-[17px] bg-customGold text-base font-black text-white mb-4 md:mb-0"
          >
            READ MORE
            <span className="inline-flex ml-2 h-4 items-start w-3">
              <i className="fas fa-chevron-right text-white text-[12px]"></i>
              <i className="fas fa-chevron-right -ml-[2px] text-white text-[12px]"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
