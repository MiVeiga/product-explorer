import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  Paper,
} from "@mui/material";
import { useProductContext } from "../../context/useProductContext";
import { useCategories } from "../../hooks/useCategories";
import styles from "./Filters.module.css";

export default function Filters() {
  const {
    category,
    search,
    sort,
    setCategory,
    setSearch,
    setSort,
    resetFilters,
  } = useProductContext();
  const { data: categories } = useCategories();

  return (
    <Paper elevation={3} className={styles.filtersContainer}>
      <Box className={styles.filtersBox}>
        <FormControl className={styles.filterItem}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e: SelectChangeEvent) => setCategory(e.target.value)}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {categories?.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Product Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          className={styles.filterItem}
        />

        <FormControl className={styles.filterItem}>
          <InputLabel>Sort by Price</InputLabel>
          <Select
            value={sort || ""}
            label="Sort by Price"
            onChange={(e: SelectChangeEvent) =>
              setSort(e.target.value as "asc" | "desc")
            }
          >
            <MenuItem value="">
              <em>No Sorting</em>
            </MenuItem>
            <MenuItem value="asc">Low to High</MenuItem>
            <MenuItem value="desc">High to Low</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={resetFilters}>
          Clear Filters
        </Button>
      </Box>
    </Paper>
  );
}
