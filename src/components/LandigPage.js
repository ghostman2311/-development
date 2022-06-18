import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/styles";
import animationData from "../animations/landinganimation/data";
import { Grid, Button, Typography } from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";

const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
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
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container alignItems="center" justify="flex-end" direction="row">
          <Grid sm item>
            <Typography variant="h2" align="center">
              Bringing the Indian Technlogy <br /> to the west
            </Typography>
            <Grid container direction="row">
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Learn More <ButtonArrow width={15} height={15} fill="red" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} width={"100%"} height={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
