import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import animationData from "../animations/landinganimation/data";
import { Grid, Button, Typography } from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";

const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 140,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  buttonContainer: {
    marginTop: "1em",
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    color: theme.palette.common.orange,
    fontFamily: "Pacifico",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
  },
  subtitle: {
    marginBottom: "1em",
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LandingPage = () => {
  const classes = useStyle();
  const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*-----Hero Block-----*/}
        <Grid container alignItems="center" justify="flex-end" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing the Indian Technlogy <br /> to the west
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimate}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} width={"100%"} height={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Service Block-----*/}
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigating to{" "}
              <span className={classes.specialText}>Celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img alt="custom software" src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
