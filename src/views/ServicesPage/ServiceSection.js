import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PolicyIcon from '@material-ui/icons/Policy';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import GavelIcon from '@material-ui/icons/Gavel';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ServiceSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
     
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="DATA PERFORMANCE"
              description="Ensure our service providers perform to the highest standards possible. Once approved to be a part of Westech Environmental LLC's repair solutions network, the service provider is then placed through a rigorous performance-based management system, ensuring they perform according to the highest standards possible. We have a built-in performance rating program that monitors and triggers all service standards customizable to your particular program. Service providers receive frequent ratings, from the moment they receive their first claim. Ratings are based on the following metrics:
             Contact time, Inspection time, Documentation upload, Customer satisfaction, Projects completed and files closed (overall time in process), Service level failure ratings, Photos upload standards, Note and file update standards, File cycle time standards"
              icon={ImportantDevicesIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="RISK MANAGEMENT"
              description="Our quality assurance program strives to improve your service experience by ensuring that our providers are following client-specific program requirements and Westech Environmental LLC's EH&S services and repair solutions service requirements. The following tools and processes are available for assessing quality and provide accurate and useful data used to track trends and manage contractor performance: File audits: assignments are desk audited to gauge technical accuracy of the estimate and file documentation. Re-inspections: select assignments are physically re-inspected to gauge customer satisfaction, technical accuracy, and a quality work product. Customer service surveys: customer surveys are conducted to measure factors such as satisfaction with contractor timeliness, professionalism, quality of work, and Net Promoter Scoring. Performance metrics: key performance metrics are captured, measured, and shared with each contractor to drive high-performance results. Contractors who do not perform within our standards and the client requirements will be removed from the program."
              icon={AccountBoxIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="POLICYHOLDER RETENTION"
              description="Policyholders expect their lives to be restored with a higher level of service than ever before. Even California’s largest and most efficient carriers cannot do this alone. That’s where Westech Environmental LLC's EH&S services and repair solutions come in.
              Our unparalleled ability to handle any loss of any size, combined with our comprehensive repair solutions claims management platform, has allowed insurance carriers the ability to dramatically improve the experience of their policyholders to increase client retention and customer satisfaction. When it comes to designing products and services, companies would do well to keep in mind the old saying 'time is money.'
              History suggests that by helping consumers save time or more fully enjoy the time they spend doing something, companies could gain a competitive advantage that could lead to higher sales and profits. Consider the success of innovations such as fast-food restaurants, automated-teller machines, and countless labor-saving applications."
              icon={PolicyIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="FAIR & ACCURATE ESTIMATES"
              description="Cost-effective and efficient service always Increased project performance equates to more efficient jobs and file handling. Westech Environmental LLC ensures that not only will more projects be completed sooner, at or under budget, and on time, but that your policyholder’s experience will not be impacted in a negative way."
              icon={AccountBoxIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="REGULATORY COMPLAINCE"
              description="Regulatory compliance is the goal that our members aspire to achieve in their efforts to ensure that they are aware of and take steps to comply with relevant laws, policies, and regulations. Due to the increasing number of regulations and need for operational transparency, organizations are increasingly adopting the use of consolidated and harmonized sets of compliance controls. This approach is used to ensure that all necessary governance requirements can be met without the unnecessary duplication of effort and activity from resources."
              icon={GavelIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="TEAM SYNCING"
              description="WTE EH&S Network operates as a Project Team and is an organized group of professionals who are involved in performing shared/individual tasks of the project as well as achieving shared/individual goals and objectives for the purpose of accomplishing the project and producing its results."
              icon={SupervisedUserCircleIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}