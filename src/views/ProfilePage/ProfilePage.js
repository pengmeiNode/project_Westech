import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";


import styles from "assets/jss/material-kit-react/views/profilePage.js";
import AboutSection from "./AboutSection";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Westech Environmental"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p> <h3>WTE Environmental<br/>Health & Safety Professionals</h3><br/>Our service providers and their employees hold certifications including:
              <br/>American Industrial Hygiene Membership<br/>Certified Asbestos Consultant<br/>Site Surveillance Technician<br/>Certified Lead Inspector
              <br/>Certified Lead Sampling Technician<br/>Certified Restorer (CR)<br/>Certified Mold Remediator (CMR)<br/>Certified Mold Remediation Supervisor (CMRS)
              <br/>Water Loss Specialist (WLS)<br/>Our process of credentialing and ongoing training requirements ensures that our EH&S services and repair solutions team consists of the most elite and qualified Environmental restoration specialists, guaranteeing you and your policyholder an exceptional level of workmanship, professionalism, and efficiency.
              </p>
            </div>
           
        <div className={classes.container}>
          <AboutSection />

        </div>
      
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
