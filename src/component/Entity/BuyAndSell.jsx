import React from 'react';
export default class BuyAndSell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            free:100,
            limit:100
        }
    }
    render(){
        return (
            <div className="buy_and_sell">
                <div className="buy">
                    <p><span>市场</span></p>
                    <p><span>货物</span><span>价格</span></p>
                </div>
                <div className="sell">
                    <p><span>出租屋</span><span>{this.state.free}/{this.state.limit}</span></p>
                    <p><span>货物</span><span>价格</span><span>数量</span></p>
                </div>
            </div>
        )
    }
}
