import { AppBar, Toolbar, Typography } from "@mui/material";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <AppBar position="fixed" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" component="div" className={styles.title}>
          Product Explorer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
