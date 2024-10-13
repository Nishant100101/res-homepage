import Image from "next/image";

export default function Reviews() {
  return (
    <div className="bg-gray-100 py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3 w-full">
            <div className="mb-6">
              <span className="text-customGold text-lg block mb-2">
                Testimonial
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0F1212] font-black mb-4">
                What Our Customer Say&apos;s
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-[#333334] font-normal">
                Barber Trading Style and Proven Strategy to Make a Living
              </p>
            </div>

            <button className="w-full lg:w-[234px] flex items-center border border-customGold justify-center h-[60px] px-[41px] py-[17px] text-base font-black text-customGold mb-4 md:mb-0 whitespace-nowrap">
              VIEW ALL REVIEW
              <span className="ml-2 inline-flex">
                <i className="fas fa-chevron-right text-customGold text-[12px]"></i>
                <i className="fas fa-chevron-right -ml-[2px] text-customGold text-[12px]"></i>
              </span>
            </button>
          </div>

          <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg w-full sm:max-w-[410px] h-auto p-6 relative">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/img/reviews/review-1.jpg"
                  alt="Devin Booker"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <p className="text-center text-[#333334] text-base sm:text-lg md:text-xl font-normal mb-4">
                Proin vel ipsum id risus ultrices scelerisque. Suspendisse
                mattis sit amet leo vel convallis.
              </p>
              <div className="flex justify-center mb-4">
                <ul className="flex space-x-1">
                  <li>
                    <i className="fas fa-star text-customGold"></i>
                  </li>
                  <li>
                    <i className="fas fa-star text-customGold"></i>
                  </li>
                  <li>
                    <i className="fas fa-star text-customGold"></i>
                  </li>
                  <li>
                    <i className="fas fa-star text-customGold"></i>
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt text-customGold"></i>
                  </li>
                </ul>
              </div>
              <h5 className="text-center text-[#333334] text-lg sm:text-xl font-bold">
                Devin Booker
              </h5>
              <span className="block text-center text-[#333334] text-sm">
                Regular User
              </span>
            </div>

            <div className="bg-white shadow-lg w-full sm:max-w-[410px] h-auto p-6 relative">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/img/reviews/review-2.jpg"
                  alt="Michelle Yeoh"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <p className="text-center text-[#333334] text-base sm:text-lg md:text-xl font-normal mb-4">
                Proin vel ipsum id risus ultrices scelerisque. Suspendisse
                mattis sit amet leo vel convallis.
              </p>
              <div className="flex justify-center mb-4">
                <ul className="flex space-x-1">
                  <li>
                    <i className="fas fa-star text-customGold"></i>
                  </li>
                  <li>
                    <i className="fas fa-star text-customGold"></i>
                  </li>
                  <li>
                    <i className="fas fa-star text-customGold"></i>
                  </li>
                  <li>
                    <i className="fas fa-star text-customGold"></i>
                  </li>
                  <li>
                    <i className="fas fa-star text-customGold"></i>
                  </li>
                </ul>
              </div>
              <h5 className="text-center text-[#333334] text-lg sm:text-xl font-bold">
                Michelle Yeoh
              </h5>
              <span className="block text-center text-[#333334] text-sm">
                Regular User
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
