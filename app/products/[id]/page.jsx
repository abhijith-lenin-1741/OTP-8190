import axios from "axios";
import React from "react";

const ProductDetails = async ({ params }) => {
  const { id } = params;

  // Fetch product data (SSG or ISR approach)
  const res = await axios.get(`http://localhost:3000/api/products?id=${id}`);
  const product = res.data;

  return (
    <>
      <div className="h-28 bg-slate-400 flex justify-center items-center text-white font-bold pt-11">
        Product Details
      </div>
      <div className="w-[100vw] h-[90vh] flex justify-center items-center">
        <div className="h-56 w-[30%] shadow-md prod-det">
          <img
            src={product?.thumbnail}
            alt=""
            className="w-[100%] h-[100%] block"
          />
          <div className="shadow-md my-2 p-2">
            <h1 className="font-bold text-gray-600 text-sm my-2">
              {product.title}
            </h1>
            <span className="text-xs">Description: {product.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

// Function to generate static paths for products
// export async function generateStaticParams() {
//   try {
//     const res = await axios.get("http://localhost:3000/api/products");
//     const products = res.data;

//     return products.map((product) => ({
//       id: product.id.toString(),
//     }));
//   } catch (error) {
//     console.error("Error fetching product paths:", error);
//     return [];
//   }
// }

// Optional metadata for the page
export const metadata = {
  title: "Product Page",
  description: "This is a product detail page",
};
