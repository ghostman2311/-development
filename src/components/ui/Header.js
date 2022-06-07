import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useScrollTrigger,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    },
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.5em",
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const Header = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software", link: "/customsoftware" },
    { name: "Mobile Apps", link: "/mobileapps" },
    { name: "Websites", link: "/websites" },
  ];

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const Drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            button
            divider
            component={Link}
            to="/"
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            button
            divider
            component={Link}
            to="/services"
          >
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            button
            divider
            component={Link}
            to="/revolution"
          >
            <ListItemText disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            button
            divider
            component={Link}
            to="/about"
          >
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            button
            divider
            component={Link}
            to="/contact"
          >
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            button
            divider
            component={Link}
            to="/estimate"
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  const tabs = (
    <>
      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab component={Link} to="/" className={classes.tab} label="Home" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          component={Link}
          to="/services"
          className={classes.tab}
          label="Services"
          onMouseOver={(event) => handleClick(event)}
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
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {menuOptions.map((option, index) => {
          return (
            <MenuItem
              key={option.name}
              component={Link}
              to={option.link}
              classes={{ root: classes.menuItem }}
              onClick={(event) => {
                handleMenuItemClick(event, index);
                setValue(1);
                handleClose();
              }}
              selected={index === selectedIndex && value === 1}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );

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
            {matches ? Drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
