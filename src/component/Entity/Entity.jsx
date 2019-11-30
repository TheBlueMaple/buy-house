import React from 'react';
import Header from './Header';
import BuyAndSell from './BuyAndSell';
import BaseInfo from './BaseInfo';
import Controls from './Controls';
export default class Entity extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            housePrice : 0,
            weeks :0,
            cash : 0,
            health:100,
            deposit:0,
            fame:100
        }
    }
    render(){
        return (
        <div className="entity">
            <Header housePrice ={this.state.housePrice} weeks ={this.state.weeks} />
            <BuyAndSell />
            <BaseInfo cash={this.state.cash} health={this.state.health} deposit={this.state.deposit} fame={this.state.fame} />
            <Controls />
        </div>
        )
    }
}