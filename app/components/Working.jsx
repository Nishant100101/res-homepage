import Image from "next/image";

export default function Working() {
  return (
    <div className="bg-customGold">
      <div className="flex flex-col h-auto lg:h-[667px] lg:flex-row bg-white shadow-lg">
        <div className="w-full lg:w-[80vw] relative">
          <Image
            src="/assets/img/working.jpg"
            alt="Working hours image"
            width={800}
            height={600}
            className="w-full h-[300px] lg:h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <a
              href="#"
              className="flex justify-center w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] items-center bg-white rounded-full p-2 lg:p-4 shadow-lg video-pulse"
            >
              <i className="fas fa-play text-xl lg:text-2xl text-customGold"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 lg:gap-10 bg-customGold p-6 lg:p-24">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-4">
              Working Hours
            </h2>

            <p className="mb-6 text-sm lg:text-base font-normal">
              Fusce id lorem risus. Duis mattis, nulla et placerat pretium,
              purus ex luctus nisi,
            </p>

            <ul className="space-y-4 mb-6 lg:mb-10">
              <li className="flex justify-between items-center text-base lg:text-[22px] font-medium leading-[28px] lg:leading-[32px] border-b border-dotted border-white pb-2 lg:pb-4">
                <span>Monday</span>
                <span>9: AM - 6: PM</span>
              </li>
              <li className="flex justify-between items-center text-base lg:text-[22px] font-medium leading-[28px] lg:leading-[32px] border-b border-dotted border-white pb-2 lg:pb-4">
                <span>Thursday</span>
                <span>11: AM - 8: PM</span>
              </li>
              <li className="flex justify-between items-center text-base lg:text-[22px] font-medium leading-[28px] lg:leading-[32px] border-b border-dotted border-white pb-2 lg:pb-4">
                <span>Wednesday</span>
                <span>6: AM - 4: PM</span>
              </li>
            </ul>

            <button className="border border-white w-full lg:w-[270px] flex items-center justify-center h-[50px] lg:h-[60px] bg-customGold text-xs lg:text-base font-black text-white mb-4 lg:mb-0 whitespace-nowrap">
              BOOKING APPOINTMENT
              <span className="ml-2 inline-flex">
                <i className="fas fa-chevron-right text-white text-[10px] lg:text-[12px]"></i>
                <i className="fas fa-chevron-right -ml-[2px] text-white text-[10px] lg:text-[12px]"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
