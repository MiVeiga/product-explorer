import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

export const server = setupServer(
  http.get("https://dummyjson.com/products", async () => {
    return HttpResponse.json({
      products: [
        {
          id: 1,
          title: "Mocked Product",
          price: 99.99,
          rating: 4.5,
          stock: 10,
          images: ["https://via.placeholder.com/100"],
        },
      ],
      total: 1,
    });
  }),

  http.get("https://dummyjson.com/products/categories", async () => {
    return HttpResponse.json([
      { slug: "electronics", name: "Electronics", url: "https://dummyjson.com/products/category/electronics" },
      { slug: "clothing", name: "Clothing", url: "https://dummyjson.com/products/category/clothing" },
      { slug: "home-appliances", name: "Home Appliances", url: "https://dummyjson.com/products/category/home-appliances" },
    ]);
  })
);