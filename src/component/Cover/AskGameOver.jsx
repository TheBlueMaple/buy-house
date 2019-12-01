import React from 'React';
import Btn_jsyx_js from '../../img/btn_jsyx_js.png';
import Btn_ksyx_qx from '../../img/btn_ksyx_qx.png';
export default class AskGameOver extends React.Component{
    render(){
        return(
            <div className='ask_game_over'>
                <img src={Btn_jsyx_js} onClick={this.props.gameOver} />
                <img src={Btn_ksyx_qx} onClick={this.props.hideAskGameOver} />
            </div>
        )
    }
}