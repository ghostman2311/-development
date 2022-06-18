import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/styles";
import animationData from "../animations/landinganimation/data";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";

const useStyle = makeStyles((theme) => ({}));

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
        <Grid container direction="row">
          <Grid item>
            <div>
              Bringing the Indian Technlogy <br /> to the west
            </div>
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
          <Grid item>
            <Lottie options={defaultOptions} width={"100%"} height={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
