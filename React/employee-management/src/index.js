import ReactDOM from "react-dom";
import React from "react";
import Component from "./hooksComponent/StockHooksComponent";

ReactDOM.render((
    <div>
        <Component stockUrl="https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI"></Component>
    </div>
), document.getElementById("root"));


