import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/styles";
import animationData from "../animations/landinganimation/data";

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
  return <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
};

export default LandingPage;
