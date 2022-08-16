import React, { createContext } from 'react';

var familyContent = createContext();

export default class GrandParent extends React.Component {
    constructor() {
        super();
        this.state = {
            village: "Haryana"
        }
    }

    updateVillageName = () => {
        this.setState({
            village: "Delhi"
        })
    }

    render() {
        return (
            <familyContent.Provider value={{
                village: this.state.village,
                updateVillageName: this.updateVillageName
            }}>
                <div style={{margin: "20px"}}>
                    <h1>Grand Parent Belongs to {this.state.village}</h1>
                    <hr/>
                    <Parent></Parent>
                </div>
            </familyContent.Provider>
        )
    }
}

class Parent extends React.Component {
    render() {
        return (
            <div style={{margin: "20px"}}>
                <h1>Parent Belongs to Nowhere</h1>
                <hr/>
                <Children></Children>
            </div>
        )
    }
}

class Children extends React.Component {
    render() {
        return (
            <div style={{margin: "20px"}}>
                <h1>Children Belongs to Nowhere</h1>
                <hr/>
                <GrandChildren></GrandChildren>
            </div>
        )
    }
}

class GrandChildren extends React.Component {
    render() {
        return (
            <div style={{margin: "20px"}}>
                <familyContent.Consumer>
                    {(data) => {
                        debugger;
                        return (
                            <div>
                                <h1>Grand Children Belongs to {data.village}</h1>
                        
                            </div>
                        )
                    }}
                </familyContent.Consumer>
                <hr/>
                <GrandGrandChildren></GrandGrandChildren>
            </div>
        )
    }
}

class GrandGrandChildren extends React.Component {
    render() {
        return (
            <div style={{margin: "20px"}}>
                <h1>Grand Grand Children Belongs to Nowhere</h1>
                <hr/>
                <GrandGrandGrandChildren></GrandGrandGrandChildren>
            </div>
        )
    }
}


class GrandGrandGrandChildren extends React.Component {
    render() {
        return (
            <div style={{margin: "20px"}}>
                <familyContent.Consumer>
                    {(data) => {
                        debugger;
                        return (
                            <div>
                                <h1>Grand Grand Grand Children Belongs to {data.village}</h1>
                                <input type="button" value="Update Village" onClick={data.updateVillageName} />
                            </div>
                        )
                    }}
                </familyContent.Consumer>
            </div>
        )
    }
}