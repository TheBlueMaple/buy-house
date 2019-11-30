import React from 'react';
import Header from './Header';
import BuyAndSell from './BuyAndSell';
import BaseInfo from './BaseInfo';
import Controls from './Controls';
export default class Entity extends React.Component{
    render(){
        return (
        <div className="entity">
            <Header housePrice ={this.props.housePrice} weeks ={this.props.weeks} />
            <BuyAndSell />
            <BaseInfo cash={this.props.cash} health={this.props.health} deposit={this.props.deposit} fame={this.props.fame} />
            <Controls />
        </div>
        )
    }
}