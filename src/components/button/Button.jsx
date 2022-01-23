import React from "react";
import "./button.scss";

function Button() {
  return (

    <div className="btnw">                        
        <div className="btng">            
            <span className="btn">
                Pickup
            </span>        
        </div>
        <div className="btng">        
            <span className="btn">
                <img src="/assets/icons/Star.svg" alt="star" />            
                Ratings
                <img src="/assets/icons/Arrow - Down.svg" alt="ArrowDown" />
            </span>        
        </div>
        
        <div className="btng">            
            <span className="btn">
                Under 30 min
            </span>        
        </div>
        
        <div className="btng">        
            <span className="btn">         
                Price
                <img src="/assets/icons/Arrow - Down.svg" alt="ArrowDown" />
            </span>        
        </div>
        
    </div>
  );
}

export default Button;
