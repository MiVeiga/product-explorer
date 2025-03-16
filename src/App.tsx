import styles from "./styles/global.module.css";
import { ProductProvider } from "./context/ProductProvider.tsx";

function App() {
  return (
    <div className={styles.container}>
      <ProductProvider>
        <h1>Product Explorer</h1>
      </ProductProvider>
    </div>
  );
}

export default App;
