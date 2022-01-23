import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./card.scss";

function Card() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className="item" data-value="1">
             
               <div className="featured">            
                    <div className="wrapper">
                        <div className="carousel-wrapper" >
                        <div className="scroll-x" drag="x" >
                            <div className="carousel">
                            <img
                                className="bg"
                                src="./assets/images/image 12.png"
                                alt="Chicken Fried"
                            />
                            <div className="circle">
                                <img src="./assets/images/Frame 20.png" alt="" />
                            </div>
                            <p className="text">
                                Get Chicken Fried <br />
                                Starting at <span className="gold">$25</span>
                                <span className="grey">Chicken Buger Fest </span>
                            </p>
                            <div className="button">
                                <span>ORDER NOW</span>
                                <div className="img-wrapper">
                                <img  className="animate__animated animate__bounce" src="./assets/images/Frame 22.svg" alt="cloche" />
                                </div>
                            </div>
                            </div>                       
                        </div>
                        </div>
                    </div>
                </div>
        </div>,
        <div className="item" data-value="2">                
            <div className="featured">            
                <div className="wrapper">
                    <div className="carousel-wrapper" >
                    <div className="scroll-x" drag="x" >
                    <div className="carousel">
                        <img
                            className="bg"
                            src="./assets/images/image 14.png"
                            alt="Chicken Buger"
                        />
                        <div className="circle" style={{ backgroundColor: "#fff" }}>
                            <img src="./assets/images/Frame 21.png" alt="" />
                        </div>
                        <p className="text">
                            Get Chicken Buger <br />
                            Starting at <span className="gold">$25</span>
                            <span className="grey">Chicken Buger Fest </span>
                        </p>
                        <div className="button">
                            <span>ORDER NOW</span>
                            <div className="img-wrapper">
                            <img src="./assets/images/Frame 22.svg" alt="cloche" />
                            </div>
                        </div>
                        </div>                  
                    </div>
                    </div>
                </div>
                </div>
        </div>,
    ];

  return (
    <div className="card">
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
             
            disableButtonsControls
            infinite 
            mouseTracking
            
            autoPlays
            autoPlayStrategy="all"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
        />

  


    </div>
  );
}

export default Card;
