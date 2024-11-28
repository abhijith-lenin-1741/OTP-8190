// app/product-area/page.js
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const fetchData = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

console.log(process.env)
const ProductArea = async () => {
  const products = await fetchData();
  return (
    <div className="">
      <div className="w-[80%] mx-auto flex justify-around py-16 items-center flex-wrap main-div">
        {products.products?.map((product) => (
          <div
            key={product.id}
            className="h-52 w-[30%] my-12 flex flex-col justify-center items-center text-white cursor-pointer hover:shadow-md hover:p-2 product-div"
          >
            <Link href={`/products/${product?.id}`}>
              <Image
              className="w-[100%] h-[100%] block"
                src={product?.thumbnail}
                alt=""
                width={150}
                height={300}
              />
            </Link>
            <h1 className="font-bold text-gray-600 text-sm">{product.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductArea;
