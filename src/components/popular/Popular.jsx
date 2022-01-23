import React from "react";
import "./popular.scss";
import { Grid, Row, Col } from 'react-flexbox-grid';

const food = [
  {
    title: "Bakery",
    url: "/assets/icons/donut 1.svg",
  },
  {
    title: "Fast Food",
    url: "/assets/icons/burger 1.svg",
  },
  {
    title: "Desserts",
    url: "/assets/icons/cake 1.svg",
  },
  {
    title: "Burgers",
    url: "/assets/icons/burger.svg",
  },
  {
    title: "Mexican",
    url: "/assets/icons/soup1.svg",
  },
  
  {
    title: "Chicken",
    url: "/assets/icons/chicken-leg1.svg",
  },
];

function PopularFood() {
  return (
    <div className="popular-food">     
      <div className="foodlist">
        {food.map((item) => (
            <div className="foodItem">
                <div className="imageWrapper">
                    <img src={item.url} alt={item.title} />
                </div>
                <p>{item.title}</p>
            </div>
        ))}

        
      </div>
    </div>
  );
}

export default PopularFood;
