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
      "Content-Type": "application?json",
    },
    data: {keyword },
  };
  const response = await axios(config);
  return response.data.data.product.map((product: any) => ({
    id: product.id,
    name: product.name,
  }));
}
