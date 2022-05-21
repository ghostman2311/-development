import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab, Button } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const Header = (props) => {
  const classes = useStyle();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    }
    if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    }
    if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    }
    if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    }
    if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
    if (window.location.pathname === "/estimate") {
      setValue(5);
    }
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
              onChange={() => setValue(0)}
            >
              <img className={classes.logo} src={logo} alt="Company logo" />
            </Button>
            <Tabs
              value={value}
              indicatorColor="primary"
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                component={Link}
                to="/"
                className={classes.tab}
                label="Home"
              />
              <Tab
                component={Link}
                to="/services"
                className={classes.tab}
                label="Services"
              />
              <Tab
                component={Link}
                to="/revolution"
                className={classes.tab}
                label="The Revolution"
              />
              <Tab
                component={Link}
                to="/about"
                className={classes.tab}
                label="About Us"
              />
              <Tab
                component={Link}
                to="contact"
                className={classes.tab}
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/estimate"
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
