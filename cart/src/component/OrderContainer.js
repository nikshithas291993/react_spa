import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import OrderDetail from "./OrderDetail";
import AllOrders from "./AllOrder";

const OrderContainer = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/orderdetail" element={<OrderDetail />} />
                <Route path="/allorders" element={<AllOrders />} />
            </Routes>
        </Router>
    )
}
  
export default OrderContainer;