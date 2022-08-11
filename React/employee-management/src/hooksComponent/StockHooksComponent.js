import { useState, useEffect } from 'react';
import Axios from "axios";

export default function StockComponent(props) {
    debugger;
    var age = 10;
    var [stockData, setStockData] = useState({
        stockPrice: 0,
        stockColor: "green",
        stockName: "",
        userName: "Mayank"
    })

    useEffect(() => {
        // componentDidMount
        console.log("Called Once")
        setInterval(() => {
            Axios.get(props.stockUrl).then((response) => {
    
                if(stockData.stockPrice > response.data.data.pricecurrent) {
                    setStockData({
                        ...stockData,
                        stockPrice: response.data.data.pricecurrent,
                        stockColor: "red"
                    })
                } else {
                    setStockData({
                        ...stockData,
                        stockPrice: response.data.data.pricecurrent,
                        stockColor: "green"
                    })
                }
            })
        }, 1000)
    }, []);

    useEffect(() => {
        // componentDidMount + componentDidUpdate
        console.log("Updated...")
    })


    return (
        <div style={{color: stockData.stockColor}}>
            <h1> Stock By {stockData.userName}: {stockData.stockName} Stock Price: {stockData.stockPrice}</h1>
        </div>
    )

        
}