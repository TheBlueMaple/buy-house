import React from 'React';
import Btn_mair from '../../img/btn_mair.png';
export default class BuyAsk extends React.Component{
    getName = (name)=>{
        switch(name){
            case 'zjyd':
                return '转基因豆';
            case 'slrj':
                return '饲料肉鸡';
            case 'dgy':
                return '高档烟酒';
            case 'jknf':
                return '进口奶粉';
            case 'fdmj':
                return '防毒面具';
            case 'hjss':
                return '黄金首饰';
            case 'spsj':
                return '肾牌手机';
            case 'gcqc':
                return '国产汽车';
            default:
                return "";
        }
    }
    render(){
        return(
            <div className='buy_ask'>
                <p>{this.props.element}<input  type='number' value={this.props.inputNumber} min='0' max={this.props.max} onChange={this.props.changeInputNumber} /><img src={Btn_mair} onClick={this.props.buy} /></p>
                <p>你最多可以购买{this.props.max}个{this.getName(this.props.name)}</p>
            </div>
        ) 
    }
}