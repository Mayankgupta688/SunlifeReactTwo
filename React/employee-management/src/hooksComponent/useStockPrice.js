import { useEffect, useState } from "react";
import Axios from "axios";

export default function useStockPrice(stockUrl) {

    var [stockData, setStockData] = useState({
        stockName: "",
        stockPrice: 0
    })

    useEffect(() => {
        Axios.get(stockUrl).then((response) => {
            setStockData({
                stockName: response.data.data.SC_FULLNM,
                stockPrice: response.data.data.pricecurrent
            })
        })
    }, [])

    setTimeout(() => {
        Axios.get(stockUrl).then((response) => {
            setStockData({
                ...stockData,
                stockPrice: response.data.data.pricecurrent
            })
        })
    }, 4000)

    return [stockData.stockName, stockData.stockPrice]
}