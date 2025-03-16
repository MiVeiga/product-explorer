import styles from "./styles/global.module.css";
import { ProductProvider } from "./context/ProductProvider.tsx";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductTable from "./components/ProductTable";
import StatsCards from "./components/StatsCards";

function App() {
  return (
    <div className={styles.container}>
      <ProductProvider>
        <Header />
        <StatsCards />
        <Filters />
        <ProductTable />
      </ProductProvider>
    </div>
  );
}

export default App;
