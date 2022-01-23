import React from "react"; 
import Card from "../../components/card";
import Popular from "../../components/popular";
import Best from "../../components/best";
import Header from "../../components/header";
import "./home.scss";
import Button from "../../components/button";
import Pick from "../../components/pick";
import Fast from "../../components/fast";
import Bottom from "../../components/bottom";

function Home(){     
    return(
        <div>
          <Header/>          
          <p className="nft">
            Today’s Featured
          </p>           
          <Card/>        
          <p className="nft">
          Best Promotion for you
          </p>
          <Best/>

          <p className="nft">
          Popular Food for you
          </p>
          <Popular/>
          <Button/>
            <div className="">
              <p className="nft">Top Picks For You <span className="nred">See all</span></p>            
            </div>
          <Pick/>

          <Button/>
            <div className="">
              <p className="nft">Fastest Near You <span className="nred">See all</span></p>            
            </div>
          <Fast/>
          <Bottom/>

        </div>
    );
}

export default Home; 