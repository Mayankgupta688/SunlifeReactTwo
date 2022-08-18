import React, { lazy, Suspense} from 'react';

export default class LazyLoadingComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }

    updateValue() {
        debugger;
        this.setState({
            name: this.state.name === "Mayank" ? "Anshul": "Mayank"
        })
    }

    returnSomeJSX() {
        return <h1>Hello World....</h1>
    }

    render() {

        if(this.state.name === "Mayank") {
            let LazyCurrentTimeComponent = lazy(() => import("../components/HeaderComponent"));
            return (
                <>
                    {this.returnSomeJSX()}
                    <h1>This is Lazy Loading for {this.state.name}</h1>

                    <Suspense fallback={<h2>Loading...</h2>}>
                        <LazyCurrentTimeComponent></LazyCurrentTimeComponent>
                    </Suspense>
                    <input type="button" onClick={this.updateValue.bind(this)} value="Update" />
                </>
            )
        } else {
            let LazyCurrentTimeComponent = lazy(() => import("../components/CurrentTimeComponent"));
            return (
                <>
                    {this.returnSomeJSX()}
                    <h1>This is Lazy Loading for {this.state.name}</h1>
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <LazyCurrentTimeComponent></LazyCurrentTimeComponent>
                    </Suspense>
    
                    <input type="button" onClick={this.updateValue.bind(this)} value="Update" />
                </>
            )
        }
        
    }
}