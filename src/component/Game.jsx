import React from 'react';
import Cover from './Cover/Cover';
import Entity from './Entity/Entity';
export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            housePrice:0,
            weeks :0,
            cash : 0,
            health:100,
            deposit:0,
            fame:100
        }
    }
    render(){
        return(
            <div className="container">
                <Cover />
                <Entity {...this.state} />
            </div>
        )
    }
}