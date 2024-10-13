import Image from "next/image";

const ServiceTabs = ({ activeTab }) => {
  const services = [
    {
      id: "haircut",
      title: "Best Facial Hair Trim At Home Treatment",
      imageUrl: "/assets/img/features/services-1.jpg",
    },
    {
      id: "washing",
      title: "Best Hair Washing Service",
      imageUrl: "/assets/img/features/services-2.jpg",
    },
    {
      id: "color",
      title: "Best Hair Coloring Service",
      imageUrl: "/assets/img/features/services-3.jpg",
    },
    {
      id: "facial",
      title: "Best Facial Treatment",
      imageUrl: "/assets/img/features/services-4.jpg",
    },
    {
      id: "shave",
      title: "Best Shaving Service",
      imageUrl: "/assets/img/features/services-5.jpg",
    },
    {
      id: "massage",
      title: "Best Massage Treatment",
      imageUrl: "/assets/img/features/services-6.jpg",
    },
  ];

  return (
    <div className="md:w-[630px] md:h-[416px] m-auto flex justify-center items-center">
      {services.map((service) => (
        <div
          key={service.id}
          className={`${activeTab === service.id ? "" : "hidden"}`}
        >
          <Image
            src={service.imageUrl}
            alt={service.title}
            width={600}
            height={400}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceTabs;
