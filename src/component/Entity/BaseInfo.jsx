import React from 'react';
export default class BaseInfo extends React.Component{
    render(){
        return (
            <div className="base_info">
                <p><span>现金:{this.props.cash}</span><span>健康:{this.props.health}</span></p>
                <p><span>存款:{this.props.deposit}</span><span>名声:{this.props.fame}</span></p>
            </div>
        )
    }
}