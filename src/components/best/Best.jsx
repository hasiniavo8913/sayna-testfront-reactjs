import React from "react";
import "./best.scss";

const food = [
  {
    title: "Shipping",
    url: "/assets/icons/delivery-man.svg",
  },
  {
    title: "Drugstores",
    url: "/assets/icons/drugstore 1.svg",
  },
  {
    title: "Holidays",
    url: "/assets/icons/sun-cream 1.svg",
  },
  {
    title: "Pets",
    url: "/assets/icons/dog 1.svg",
  },
  {
    title: "Retail",
    url: "/assets/icons/Group 382.svg",
  },
  
  {
    title: "Retail",
    url: "/assets/icons/Group 382.svg",
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
