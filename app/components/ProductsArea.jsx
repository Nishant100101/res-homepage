import Image from "next/image";

const products = [
  {
    id: 1,
    name: "New Fresh Wash",
    price: "$56.00",
    imageUrl: "/assets/img/products/products-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "New Fresh Wash",
    price: "$51.39",
    imageUrl: "/assets/img/products/products-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "New Fresh Wash",
    price: "$63.87",
    imageUrl: "/assets/img/products/products-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "New Fresh Wash",
    price: "$47.89",
    imageUrl: "/assets/img/products/products-4.jpg",
    rating: 5,
  },
];

const ProductsArea = () => {
  return (
    <div className="py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-[753px] flex flex-col gap-10 h-[120px] mx-auto">
          <span className="text-customGold text-lg font-black">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-black">
            Evoke the experience of one of our barber shops
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow-lg overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ objectFit: "cover" }}
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <ul className="flex space-x-4 text-white">
                    <li>
                      <a href="#" className="hover:text-customGold">
                        <i className="far fa-shopping-basket"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-customGold">
                        <i className="far fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={product.imageUrl}
                        className="img-popup hover:text-customGold"
                      >
                        <i className="far fa-compress"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 text-center">
                <div className="flex justify-center mb-2 text-customGold">
                  {[...Array(product.rating)].map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <h5 className="text-lg font-semibold mb-2">
                  <a href="#" className="hover:text-customGold">
                    {product.name}
                  </a>
                </h5>
                <span className="text-lg font-bold text-customGold">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsArea;
