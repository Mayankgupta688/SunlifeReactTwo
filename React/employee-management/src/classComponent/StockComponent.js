import React from 'react';
import Axios from "axios";

export default class StockComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stockPrice: 0,
            stockColor: "green",
            stockName: ""
        }
    }

    render() {
        return (
            <div style={{color: this.state.stockColor}}>
                <h1>{this.state.stockName} Stock Price: {this.state.stockPrice}</h1>
            </div>
        )
    }

    componentDidMount() {
        setInterval(() => {
            Axios.get(this.props.stockUrl).then((response) => {

                if(this.state.stockPrice > response.data.data.pricecurrent) {
                    this.setState({
                        stockName: response.data.data.SC_FULLNM,
                        stockPrice: response.data.data.pricecurrent,
                        stockColor: "red"
                    })
                } else {
                    this.setState({
                        stockName: response.data.data.SC_FULLNM,
                        stockPrice: response.data.data.pricecurrent,
                        stockColor: "green"
                    })
                }
            })
        }, 2000)
    }
}