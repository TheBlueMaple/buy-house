import React from 'React';
import Button_essc from '../../img/btn_essc.png';
import Button_nmsc from '../../img/btn_nmsc.png';
import Button_pfsc from '../../img/btn_pfsc.png';
import Button_yh from '../../img/btn_yh.png';
import Button_yy from '../../img/btn_yy.png';
import Button_slb from '../../img/btn_slb.png';
import Button_zj from '../../img/btn_zj.png';
import Button_bz from '../../img/btn_bz.png';
import Button_ksyx from '../../img/btn_ksyx.png';
import Button_lcb from '../../img/btn_lcb.png';
export default class Controls extends React.Component{
    render(){
        return(
            <div className="controls">
                <p>
                    <img src={Button_essc}/>
                    <img src={Button_nmsc}/>
                    <img src={Button_pfsc}/>
                </p>
                <p>
                    <img src={Button_yh}/>
                    <img src={Button_yy}/>
                    <img src={Button_slb}/>
                    <img src={Button_zj}/>
                </p>
                <p>
                    <img src={Button_bz}/>
                    <img src={Button_ksyx}/>
                    <img src={Button_lcb}/>
                </p>
            </div>
        )
    }
}