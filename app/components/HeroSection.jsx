import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="w-full select-none h-[100vh]">
      <div
        className="absolute top-0 left-0 bg-cover bg-center w-full h-full flex justify-between"
        style={{ backgroundImage: 'url("/assets/img/bg/banner-bg-1.jpg")' }}
      >
        <div
          className={`h-full pt-10 gap-6 max-lg:mx-auto flex flex-col justify-center items-end md:items-start ml-16 px-3 w-[751px] text-center md:text-left`}
        >
          <h6 className="text-[16px] max-[770px]:mx-auto md:text-[18px] text-customGold font-black leading-[24px] md:leading-[28px]">
            Welcome to Our Barbex
          </h6>
          <h1 className="font-black max-[770px]:mx-auto max-lg:text-5xl text-white lg:text-[80px] leading-[50px] md:leading-[70px] lg:leading-[100px] mb-4">
            Best Hair Salon for a Professional Look
          </h1>

          <div className="flex flex-col max-[770px]:mx-auto md:flex-row items-center">
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

            <a
              href="#"
              className="w-[264px] h-[60px] gap-[10px] ml-0 md:ml-[30px] px-[41px] py-[17px] border-customGold border text-base font-black text-customGold"
            >
              VIEW ALL SERVICES
              <span className="inline-flex ml-2 h-4 items-start w-3">
                <i className="fas fa-chevron-right text-customGold text-[12px]"></i>
                <i className="fas fa-chevron-right -ml-[2px] text-customGold text-[12px]"></i>
              </span>
            </a>
          </div>
        </div>

        <div
          className="absolute right-0 bottom-0 text-right box-border lg:block hidden"
          style={{ animationDelay: "1.3s" }}
        >
          <Image
            src="/assets/img/bg/banner-1.webp"
            alt="Banner"
            className="w-full max-md:h-[55vh] h-[70vh] transition-all duration-400 ease-out"
            sizes="(max-width: 1399px) 580px, (max-width: 1520px) 750px, (max-width: 1799px) 850px, (min-width: 1800px) 930px"
            width={930}
            height={820}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
