import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductProvider } from "../../context/ProductProvider";
import StatsCard from "./index";

const queryClient = new QueryClient();

function renderWithProviders(ui: React.ReactNode) {
  return render(
    <QueryClientProvider client={queryClient}>
      <ProductProvider>{ui}</ProductProvider>
    </QueryClientProvider>
  );
}

describe("StatsCard", () => {
  it("renders the StatsCard component correctly", () => {
    renderWithProviders(<StatsCard />);

    expect(screen.getByText("Total Products")).toBeInTheDocument();
    expect(screen.getByText("Total Categories")).toBeInTheDocument();
  });
});
