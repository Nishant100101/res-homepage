import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";

export default function BlogSection() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="text-customGold text-lg block mb-2">
            Blog and Article
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Read Our Blog and News
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/assets/img/blog/blog-1.jpg"
                alt="We are a Haircut Salon Based in South Melbourne"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <div className="flex gap-5 items-center mb-4">
                <span className="bg-customGold text-white flex justify-center items-center w-[120px] h-[34px] text-sm font-black">
                  Haircutting
                </span>
                <span className="text-sm flex gap-2 font-black text-[#333334]">
                  <FaCalendarDays
                    width={15}
                    height={15}
                    className="text-customGold"
                  />{" "}
                  30 June, 2022
                </span>
              </div>
              <h4 className="text-lg max-xl-1451:text-2xl max-xl-1451:font-black font-semibold text-[#0F1212] mb-4">
                We are a Haircut Salon Based in South Melbourne
              </h4>
              <a
                href="#"
                className="text-customGold font-black text-base inline-flex items-center"
              >
                Read More <i className="fas fa-angle-double-right ml-2"></i>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/assets/img/blog/blog-2.jpg"
                alt="Online booking appointment For Salon, Hair Salon"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <div className="flex gap-5 items-center mb-4">
                <span className="bg-customGold text-white flex justify-center items-center w-[120px] h-[34px] text-sm font-black">
                  Hair Color
                </span>
                <span className="text-sm flex gap-2 font-black text-[#333334]">
                  <FaCalendarDays
                    width={15}
                    height={15}
                    className="text-customGold"
                  />{" "}
                  25 June, 2022
                </span>
              </div>
              <h4 className="text-lg max-xl-1451:text-2xl max-xl-1451:font-black font-semibold text-[#0F1212] mb-4">
                Online booking appointment For Salon, Hair Salon
              </h4>
              <a
                href="#"
                className="text-customGold font-black text-base inline-flex items-center"
              >
                Read More <i className="fas fa-angle-double-right ml-2"></i>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/assets/img/blog/blog-3.jpg"
                alt="Customising your shave is Fun and easy"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <div className="flex gap-5 items-center mb-4">
                <span className="bg-customGold text-white flex justify-center items-center w-[120px] h-[34px] text-sm font-black">
                  Lather Shave
                </span>
                <span className="text-sm flex gap-2 font-black text-[#333334]">
                  <FaCalendarDays
                    width={15}
                    height={15}
                    className="text-customGold"
                  />{" "}
                  21 June, 2022
                </span>
              </div>
              <h4 className="text-lg max-xl-1451:text-2xl max-xl-1451:font-black font-semibold text-[#0F1212] mb-4">
                Customising your shave is Fun and easy
              </h4>
              <a
                href="#"
                className="text-customGold font-black text-base inline-flex items-center"
              >
                Read More <i className="fas fa-angle-double-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
