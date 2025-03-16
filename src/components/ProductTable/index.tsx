import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
  Collapse,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useProductContext } from "../../context/useProductContext";
import { useState } from "react";
import { Product } from "../../hooks/useProducts";
import styles from "./ProductTable.module.css";

export default function ProductTable() {
  const { page, limit, setPage, products, totalProducts, isLoading, isError } =
    useProductContext();
  const [openRows, setOpenRows] = useState<Record<number, boolean>>({});

  const toggleRow = (id: number) => {
    setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Paper elevation={3} className={styles.tableContainer}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <Typography variant="h6" component="div">
                  Image
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="div">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="div">
                  Brand
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="div">
                  Category
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="div">
                  Price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="div">
                  Discount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="div">
                  Rating
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="div">
                  Stock
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  <CircularProgress />
                  <Typography variant="body1" color="textSecondary">
                    Loading products...
                  </Typography>
                </TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  <Typography variant="body1" color="error">
                    Error loading products. Please try again later.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              products.map((row: Product) => (
                <>
                  <TableRow key={row.id}>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => toggleRow(row.id)}
                      >
                        {openRows[row.id] ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <img
                        src={row.thumbnail}
                        alt={row.title}
                        className={styles.productImage}
                      />
                    </TableCell>
                    <TableCell>{row.title ?? "-"}</TableCell>
                    <TableCell>{row.brand ?? "-"}</TableCell>
                    <TableCell>{row.category ?? "-"}</TableCell>
                    <TableCell>${row.price ?? "-"}</TableCell>
                    <TableCell>{row.discountPercentage ?? "-"}%</TableCell>
                    <TableCell>{row.rating ?? "-"}</TableCell>
                    <TableCell>{row.stock ?? "-"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      colSpan={9}
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                    >
                      <Collapse
                        in={openRows[row.id]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box className={styles.detailsContainer}>
                          <Typography
                            variant="h6"
                            component="div"
                            className={styles.detailsTitle}
                          >
                            Product Details
                          </Typography>
                          <Typography
                            variant="body1"
                            component="div"
                            className={styles.detailsText}
                          >
                            {row.description}
                          </Typography>
                          <Box className={styles.productDetailsImages}>
                            {row.images.map((img, index) => (
                              <img
                                key={index}
                                src={img}
                                alt={`img-${index}`}
                                className={styles.productDetailImage}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalProducts ?? 0}
        rowsPerPage={limit}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPageOptions={[]}
      />
    </Paper>
  );
}
