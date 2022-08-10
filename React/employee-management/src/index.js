import ReactDOM from "react-dom";
import React from "react";
import Component from "./classComponent/StockComponent";

ReactDOM.render((
    <div>
        <Component stockUrl="https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI"></Component>
        <Component stockUrl="https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/T"></Component>
    </div>
), document.getElementById("root"));


