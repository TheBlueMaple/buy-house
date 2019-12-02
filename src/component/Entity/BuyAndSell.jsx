import React from 'react';
export default class BuyAndSell extends React.Component{
    render(){
        return (
            <div className="buy_and_sell">
                <div className="buy">
                    <p><span>市场</span></p>
                    <p><span>货物</span><span>价格</span></p>
                    <ul className="current_market">
                        {this.props.currentMarket.map((value,key)=><li key={key} onClick={()=>{this.props.buyCommodity(value,this.props.cash)}}>{value.element}<span>{value.price}</span></li>)}
                    </ul>
                </div>
                <div className="sell">
                    <p><span>出租屋</span><span>{this.props.repertoryStatus.free}/{this.props.repertoryStatus.limit}</span></p>
                    <p><span>货物</span><span>价格</span><span>数量</span></p>
                    <ul className="repertory">
                        {this.props.repertory.map((value,key)=>{
                            if(value.count > 0)
                                return(
                                    <li key={key} onClick={()=>{this.props.sellCommodity(value)}}>{value.element}
                                        <span>{value.buyingPrice}</span>
                                        <span>{value.count}</span>
                                    </li>);
                            else
                                return null;
                                })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
