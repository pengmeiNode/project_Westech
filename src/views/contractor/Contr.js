import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import SearchField from "react-search-field";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import './Table.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, connectHits } from 'react-instantsearch-dom';



import styles from "assets/jss/material-kit-react/views/profilePage.js";
import BasicTable from "./BasicTable";

const useStyles = makeStyles(styles);
const searchClient = algoliasearch(
    'YTHOHYSY6A',
    '2bfca95611c392c9f463cf211484d83e'
  );
 
  

  const Hits = ({ hits }) => (
    <table>
      <thead>
        <tr>
          <th>Employer</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        
      {hits.map(hit => (
        <tr>
        
        <td>{hit.employer}</td>
        <td>{hit.location}</td>
        </tr>
      ))}
 

      </tbody>
     
    </table>
  );
  
  const CustomHits = connectHits(Hits);

export default function Contr(props) {
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
            <InstantSearch
    indexName="customers"
    searchClient={searchClient}
  >
    <SearchBox />
    <CustomHits  />
  </InstantSearch>
  
        <div className={classes.container}>
          
         

        </div>
      
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
