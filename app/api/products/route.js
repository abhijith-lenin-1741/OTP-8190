import axios from "axios";

export const GET = async(request) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id"); 
    const response = await axios(`https://dummyjson.com/products/${id}`, {
      cache: "force-cache"
    })
  return new Response(JSON.stringify(response?.data));
};
