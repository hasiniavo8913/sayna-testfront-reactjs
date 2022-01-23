import React from "react";
import { Route, useLocation, Navigate, Routes } from "react-router-dom";


import Account from "../containers/account";
import Order from "../containers/order";
import Pickup from "../containers/pickup";
import Search from "../containers/search";
import Main from "../containers/main";


function RoutesAll() {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Main />} exact />
        <Route path="/account" element={<Account />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
      
  );
}

export default RoutesAll;
