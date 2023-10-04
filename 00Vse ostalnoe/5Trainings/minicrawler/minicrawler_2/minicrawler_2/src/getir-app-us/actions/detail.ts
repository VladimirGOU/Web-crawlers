import Product from "../../interfaces/product";
import axios from "axios";

export default async function detail(productid: string): Promise<Product> {
  const config = {
    method: "get",
    url: `https://getirx-client-api-gateway.getirapi.com/products/${productid}`,
    headers: {
      token: "1667203609100f8feb35fe6784c0a5766adddd29d57087dc31a2892daf44f1a5b3db2c16874e",
      ".content-type": "aplication/json",
    },
  };

  const response: any = await axios(config);
  return { id: "0", name: "placeholder" };
}