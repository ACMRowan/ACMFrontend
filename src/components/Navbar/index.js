import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "../Drawer";
const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    width: '100%',
    marginLeft: '50%'
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "black",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" style={{ background: "#F5BD1F" }}>
      <Toolbar>
      <Typography variant="h4">Rowan ACM</Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/attendance" className={classes.link}>
              Attendance
            </Link>
            <Link to="/annoucements" className={classes.link}>
              Annoucements
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
