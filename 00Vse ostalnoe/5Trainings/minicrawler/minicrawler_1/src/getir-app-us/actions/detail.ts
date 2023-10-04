// import Product from "../../interfaces/product";
// import axios from "axios";

// const config = {
//   method: "get",
//   url: "https://getirx-client-api-gateway.getirapi.com/category-products?categoryId=619286af34b67d7d56d22c54",
//   headers: {
//     token:
//     "16667794223427c0d4de4b3561c510806bdb82d994f8f3f2bd67ebb2b302f0c2c86d9215cfc9a",
//     "content-type": "application.json",
//   },
// };

// export default async function detail(productid: string): Promise<Product>{
//   const response = await axios(config);

//   return response.data.data.category.subCategory.map((subCategory:any) => subCategory.products.map());
// }


import Product from "../../interfaces/product";
import axios from "axios";
export default async function detail(productid: string): Promise<Product> {
  const config = {
    method: "get",
    url: `https://getirx-client-api-gateway.getirapi.com/products/${productid}`,
    headers: {
      token:
        "1667203609100f8feb35fe6784c0a5766adddd29d57087dc31a2892daf44f1a5b3db2c16874e9",
      "content-type": "application/json",
    },
  };
  const response: any = await axios(config);
  // console.log(JSON.stringify(response.data.data.product.name, null, 2));
  return response.data.data.product.name;
}







