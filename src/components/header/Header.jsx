import React from "react";
import "./header.scss";
import { Grid, Row, Col } from 'react-flexbox-grid';
 
function Header() {
  return (
    <div className="header">
            
        <Grid fluid >
            <Row  middle="xs">
               
                    <Col>
                        <div >
                            <img src="/assets/icons/Location.svg" alt="location" />
                            <span>2600 Chadwick Rd</span>
                        </div>  <span  className="adress">Marietta, GA 30066, USA</span>
                    </Col>
               
                
                <Col >                    
                    <div className="offers">
                        <img src="/assets/icons/offer1(Traced).svg" alt="offer" />
                        <span>Offers</span>
                    </div>
                </Col>
                
            </Row>
        </Grid>
    </div>


    
  );
}


export default Header;
