import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductTable from "./index";
import { ProductProvider } from "../../context/ProductProvider";

const queryClient = new QueryClient();

describe("ProductTable", () => {
  it("should display products from the API", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <ProductTable />
        </ProductProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Mocked Product")).toBeInTheDocument();
    });

    expect(screen.getByText("$99.99")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });
});
