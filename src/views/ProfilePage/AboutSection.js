import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
     
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Individual Approach"
              description="WTE EH&S Network recognizes that our customer-centric business strategy is a more sustainable approach to achieving a long-term competitive advantage than a focus on quick fixes. Not surprisingly, enhancing customer relationships is a top priority for our network."
              icon={ThumbUpIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Qualified Employees"
              description="Our Qualified and Well Experienced Team comprises of industry-leading Environmental Health and Safety advisors and service providers who are dedicated to offering compliance solutions to clients. We provide the latest regulatory compliance information and best practices on every aspect your project."
              icon={AccountBoxIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="24/7 Online Support"
              description="Our members have  access to 24/7 Customer service representatives  designed to help mobilize the professionals that you need when you need them."
              icon={HeadsetMicIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}