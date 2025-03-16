import { Paper, Box } from "@mui/material";
import { useProductContext } from "../../context/useProductContext";
import styles from "./StatsCard.module.css";

export default function StatsCard() {
  const { totalProducts, totalCategories } = useProductContext();

  return (
    <Box className={styles.cardContainer}>
      <Paper className={styles.card} elevation={3}>
        <span className={styles.cardTitle}>Total Products</span>
        <span className={styles.cardValue}>{totalProducts}</span>
      </Paper>

      <Paper className={styles.card} elevation={3}>
        <span className={styles.cardTitle}>Total Categories</span>
        <span className={styles.cardValue}>{totalCategories}</span>
      </Paper>
    </Box>
  );
}
