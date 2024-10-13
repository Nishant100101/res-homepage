import Image from "next/image";
import { FaRegHandPointer } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="bg-[#CCCCCC] overflow-clip">
      <div className="relative bg-[#0f1212] text-[#CCCCCC]">
        <div className="absolute bottom-10 left-[80px] top-5">
          <Image
            src="/assets/img/foorer.png"
            width={340}
            height={307}
            className="opacity-90"
            alt="foorer"
          />
        </div>
        <div className="p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center -mx-6">
              <div className="max-xl-1451:w-[459px] lg:w-7/12 px-6 mb-6 lg:mb-0">
                <div>
                  <div className="mb-4">
                    <a href="/">
                      <Image
                        src="/assets/img/logo/logo.png"
                        alt="Barbex Logo"
                        width={147}
                        height={40}
                      />
                    </a>
                  </div>

                  <ul className="flex space-x-6">
                    <li>
                      <a href="/services" className=" hover:text-customGold">
                        Trend Haircut
                      </a>
                    </li>
                    <li>
                      <a href="/services" className=" hover:text-customGold">
                        Hair Washing
                      </a>
                    </li>
                    <li>
                      <a href="/services" className=" hover:text-customGold">
                        Hair Coloring
                      </a>
                    </li>
                    <li>
                      <a href="/services" className=" hover:text-customGold">
                        Facial hair Trim
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full lg:w-5/12 h-fit">
                <form action="#" className="flex h-16">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full px-4 z-50 h-full border-l border-t border-b box-border border-[#CCCCCC] focus:outline-none bg-transparent placeholder:text-[#9c9b9b]"
                  />
                  <button
                    type="submit"
                    className="p-1 bg-customGold w-[70px] h-full text-white flex justify-center items-center hover:bg-customGold"
                  >
                    <FaRegHandPointer />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 mt-[0.5px] bg-[#0f1212]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
            <div className="text-center lg:text-left text-[#CCCCCC]">
              <p>
                Copyright © 2022{" "}
                <a href="/" className="text-cubg-customGold">
                  ThemeOri
                </a>
                . Website by Barbex.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex text-base font-bold justify-center lg:justify-end space-x-4">
              <a href="#" className="text-[#CCCCCC] hover:text-customGold">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-customGold">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-customGold">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-customGold">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-customGold">
                <i className="fab fa-snapchat"></i>
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-customGold">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-customGold">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
