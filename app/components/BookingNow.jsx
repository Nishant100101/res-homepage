import { IoCallOutline } from "react-icons/io5";

const BookingNow = () => {
  return (
    <div
      className="relative max-md:pt-10 h-[714px] w-full bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/img/bg/booking.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="flex justify-center items-center w-full h-full relative z-10">
        <div className="flex max-md:flex-col md:px-20 justify-between">
          <div className="relative flex flex-col justify-center items-center md:items-start h-full px-4 md:px-16 text-center md:text-left">
            <p className="text-customGold font-semibold mb-2">Booking Now</p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-6xl leading-tight md:leading-snug lg:leading-[80px] font-bold mb-4">
              Book your appointment <br />
              online And call our salon
            </h1>

            <button className="w-[270px] flex items-center justify-center h-[60px] px-[41px] py-[17px] bg-customGold text-base font-black text-white mb-4 md:mb-0 whitespace-nowrap">
              BOOKING APPOINTMENT
              <span className="ml-2 inline-flex">
                <i className="fas fa-chevron-right text-white text-[12px]"></i>
                <i className="fas fa-chevron-right -ml-[2px] text-white text-[12px]"></i>
              </span>
            </button>
          </div>

          <div className="relative w-[90%] mx-auto sm:w-[280px] h-[273px] bg-white p-8 shadow-lg z-20">
            <div className="flex flex-col justify-between items-center">
              <div className="rounded-full bg-[rgb(247,244,236)] text-5xl p-5 text-[rgb(213,176,98)]">
                <IoCallOutline />
              </div>
              <div className="text-center">
                <p className="text-[#0F1212] mb-2 text-lg font-bold">
                  Call Now
                </p>
                <p className="text-[#0F1212] text-lg font-black">
                  +123 (568) 584
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingNow;
