import Image from "next/image";

export default function InstagramGrid() {
  const images = [
    "/assets/img/features/instagram-1.jpg",
    "/assets/img/features/instagram-2.jpg",
    "/assets/img/features/instagram-3.jpg",
    "/assets/img/features/instagram-4.jpg",
    "/assets/img/features/instagram-5.jpg",
    "/assets/img/features/instagram-6.jpg",
  ];

  return (
    <div className="relative flex items-end">
      <div className="h-full top-1/2 absolute w-full bg-[#0f1212]">1</div>
      <div className="container px-8 py-10  relative mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <Image
                src={image}
                alt={`Instagram ${index + 1}`}
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-white text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
