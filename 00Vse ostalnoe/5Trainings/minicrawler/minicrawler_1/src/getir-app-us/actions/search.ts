// import Product from "../../interfaces/product";
// import axios from "axios";


// export default async function search(keyword: string): Promise<Product>{
//   const data = JSON.stringify({
//     keyword: "water",
//   });
//   const config = {
//     method: "post",
//     url: "https://getirx-client-api-gateway.getirapi.com/search",
//     headers: {
//       token: 
//       "16672293591539081e9ceb1448a62975074df661251f5fdc979998137da3245280e0cdcb669c4",
//       "content-type": "application.json",
//     },
//     data: { keyword },
//   };
//   const response = await axios(config);
  
//   return response.data.data.products.map((product: any) => ({
//     id: product.id,
//     name: product.name,
//   }));
// }


import Product from "../../interfaces/product";
import axios from "axios";
export default async function search(keyword: string): Promise<Product[]> {
  const data = JSON.stringify({
    keyword: "water",
  });
  const config = {
    method: "post",
    url: "https://getirx-client-api-gateway.getirapi.com/search",
    headers: {
      token:
        "16667891040432fcba7023f3a62b60973ad71307010ccf867d14327b2d4d432fbef39475a2437",
      "Content-Type": "application/json",
    },
  data: { keyword },
  };
  const response = await axios(config);
  // console.log(JSON.stringify(response.data, null, 2));
  return response.data.data.products.map((product: any) => ({
    id: product.id,
    name: product.name,
  }));
}