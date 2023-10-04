const axios = require("axios");

const config = {
    headers: {
        token:
        "16667794223427c0d4de4b3561c510806bdb82d994f8f3f2bd67ebb2b302f0c2c86d9215cfc9a",
        "content-type": "application/json",

    }
}


const groceries_data = [];

const main = async () => {
    try {
        const products = await axios.get(
            "https://getirx-client-api-gateway.getirapi.com/category-products?categoryId=619286af34b67d7d56d22c54",
            config
        );
        let data = products.data;

        Object.keys(products).forEach(function(key, index) {
            products[key];
        });

        const names = products.data.data.category.subCategories.map((item) => 
        item.products.map((x) => x.name)
        );

        console.log(names);

        const id = products.data.data.category.subCategories.map((item) => 
        item.product.map((x) => x.id)
        );

        console.log(id);

        groceries_data.push({ names, id});

    } catch (error) {
        console.log(error);
    }
};
main();