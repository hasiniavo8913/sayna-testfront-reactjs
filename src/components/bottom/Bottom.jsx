import React from "react";
import "./bottom.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Bottom() {
    
const menu = [
    {
      title: "Home",
      url: "/assets/icons/Home.svg",      
      path:"/",
    },
    {
      title: "Pickup",
      url: "/assets/icons/delivery-man2.svg",
      path:"/pickup",
    },
    {
      title: "Search",
      url: "/assets/icons/Search.svg",
      path:"/search",
    },
    {
      title: "Order",
      url: "/assets/icons/Document.svg",
      path:"/order",
    },
    {
      title: "Account",
      url: "/assets/icons/Profile.svg",
      path:"/account",
    },
  ];

  return (
    <div className="menu-list">          
        {menu.map((item) => (
            <div className="style">
                <Link to={item.path} className="lnkno">
                  <div className="pd1">                                    
                    <img src={item.url} alt={item.title} />
                    </div>
                  <p>{item.title}</p>
                </Link>
            </div>
        ))}             
    </div>
    
  );
}

export default Bottom;
