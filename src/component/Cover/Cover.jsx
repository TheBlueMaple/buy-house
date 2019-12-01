import React from 'react';
import StartPage from './StartPage';
import Help from './Help';
import StartCash from './StartCash';
import AskGameOver from './AskGameOver';
export default class Cover extends React.Component{
    render(){
        return (
        <div className="cover">
            {this.props.isShowStartPage && <StartPage />}
            {this.props.isShowHelp && <Help 
                hideHelp={this.props.hideHelp} 
                hideCover={this.props.hideCover} />}
            {this.props.isShowStartCash && <StartCash 
                startCash={this.props.startCash} 
                coupon={this.props.coupon} 
                decCash={this.props.decCash} 
                addCash={this.props.addCash} 
                startGame={this.props.startGame} 
                cancelGame={this.props.cancelGame} />}
            {this.props.isShowAskGameOver && <AskGameOver 
                gameOver={this.props.gameOver} 
                hideAskGameOver={this.props.hideAskGameOver} />}
        </div>
        )
    }
}