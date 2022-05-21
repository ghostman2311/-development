import React, { useState } from "react";
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
}));

const Header = (props) => {
  const classes = useStyle();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} alt="Company logo" />
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
