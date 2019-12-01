import React from 'React';
import Btn_add from '../../img/btn_add.png';
import Btn_dec from '../../img/btn_dec.png';
import Btn_ksyx_ks from '../../img/btn_ksyx_ks.png';
import Btn_ksyx_qx from '../../img/btn_ksyx_qx.png';
export default class StartCash extends React.Component{
    render(){
        return (
            <div className='start_cash'>
                <span>{this.props.coupon}</span>
                <p><img src={Btn_dec} onClick={this.props.decCash} /><span>{this.props.startCash}</span><img src={Btn_add} onClick={this.props.addCash} /></p>
                <p><img src={Btn_ksyx_ks} onClick={this.props.startGame} /><img src={Btn_ksyx_qx} onClick={this.props.cancelGame} /></p>
            </div>
        )
    }
}