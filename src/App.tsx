import styles from "./styles/global.module.css";
import { ProductProvider } from "./context/ProductProvider.tsx";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.container}>
      <ProductProvider>
        <Header />
      </ProductProvider>
    </div>
  );
}

export default App;
