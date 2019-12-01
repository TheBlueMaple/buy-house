import React from 'react';
import Header from './Header';
import BuyAndSell from './BuyAndSell';
import BaseInfo from './BaseInfo';
import Controls from './Controls';
export default class Entity extends React.Component{
    render(){
        return (
        <div className="entity">
            <Header 
                housePrice ={this.props.housePrice} 
                weeks ={this.props.weeks} />
            <BuyAndSell 
                isShowMarket={this.props.isShowMarket} 
                currentMarket={this.props.currentMarket}
                isPlay={this.props.isPlay} />
            <BaseInfo 
                cash={this.props.cash} 
                health={this.props.health} 
                deposit={this.props.deposit} 
                fame={this.props.fame} />
            <Controls 
                showHelp={this.props.showHelp} 
                showCover={this.props.showCover} 
                start={this.props.start} 
                isPlay={this.props.isPlay} 
                refreshMarket={this.props.refreshMarket}
                showAskGameOver={this.props.showAskGameOver}  />
        </div>
        )
    }
}