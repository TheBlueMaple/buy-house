import React from 'React';
import Btn_maic from '../../img/btn_maic.png';
export default class SellAsk extends React.Component{
    getSurplus = ()=>{
        if(this.props.surplus === false)
            return "市场上没有这种货物，你无法销售";
        else if(this.props.surplus < 0) {
            return '卖出会亏损'+parseInt(this.props.surplus);
        }else if(this.props.surplus >= 0){
            return '卖出可盈利'+this.props.surplus;
        }
    }
    render(){
        return(
            <div className='sell_ask'>
                <p>{this.props.element}<input  type='number' value={this.props.outNumber} min='0' max={this.props.max} onChange={this.props.changeOutNumber} /><img src={Btn_maic} onClick={this.props.sell} /></p>
                <p>{this.getSurplus()}</p>
            </div>
        ) 
    }
}