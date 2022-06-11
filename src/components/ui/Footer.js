import React from "react";
import { makeStyles } from "@material-ui/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <img
        className={classes.adornment}
        alt="black adornment"
        src={footerAdornment}
      />
    </footer>
  );
};

export default Footer;
