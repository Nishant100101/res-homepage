import Image from "next/image";

const services = [
  {
    id: "haircut",
    label: "Trend Haircut",
    icon: "/assets/img/icon/services-1.png",
    activeIcon: "/assets/img/icon/services-7.png",
  },
  {
    id: "washing",
    label: "Hair Washing",
    icon: "/assets/img/icon/services-2.png",
    activeIcon: "/assets/img/icon/services-8.png",
  },
  {
    id: "color",
    label: "Hair Color",
    icon: "/assets/img/icon/services-3.png",
    activeIcon: "/assets/img/icon/services-9.png",
  },
  {
    id: "facial",
    label: "Facial Hair Trim",
    icon: "/assets/img/icon/services-4.png",
    activeIcon: "/assets/img/icon/services-10.png",
  },
  {
    id: "shave",
    label: "Lather Shave",
    icon: "/assets/img/icon/services-5.png",
    activeIcon: "/assets/img/icon/services-11.png",
  },
  {
    id: "massage",
    label: "Head Massage",
    icon: "/assets/img/icon/services-6.png",
    activeIcon: "/assets/img/icon/services-12.png",
  },
];

const ServicesNav = ({ activeTab, setActiveTab }) => {
  return (
    <ul className="max-lg:grid max-lg:px-4 max-lg:grid-cols-2 max-lg:gap-4  flex flex-wrap gap-8 mx-auto justify-center list-none">
      {services.map((service) => (
        <li key={service.id} className="nav-item list-item text-center">
          <button
            className={`relative w-[190px] max-lg:w-full h-[170px] font-black flex items-center justify-center flex-col text-xl ${
              activeTab === service.id
                ? "bg-customGold text-white"
                : "bg-white text-heading-color"
            }`}
            onClick={() => setActiveTab(service.id)}
          >
            <div className="block mb-6 px-11 max-lg:px-8 transition-all duration-400">
              <Image
                src={
                  activeTab === service.id ? service.activeIcon : service.icon
                }
                alt={service.label}
                width={60}
                height={60}
              />
            </div>
            {service.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServicesNav;
