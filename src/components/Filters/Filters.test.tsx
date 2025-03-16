import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductProvider } from "../../context/ProductProvider";
import Filters from "./index";

const queryClient = new QueryClient();

function renderWithProviders(ui: React.ReactNode) {
  return render(
    <QueryClientProvider client={queryClient}>
      <ProductProvider>{ui}</ProductProvider>
    </QueryClientProvider>
  );
}

describe("Filters", () => {
  it("renders filters correctly", async () => {
    renderWithProviders(<Filters />);

    expect(await screen.findByTestId("category-select")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("sort-select")).toBeInTheDocument();
    expect(screen.getByTestId("clear-filters")).toBeInTheDocument();
  });
});
