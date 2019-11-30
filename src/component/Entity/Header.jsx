import React from 'react';
export default class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <span>房价:{this.props.housePrice !=0 ? this.props.housePrice+'万' : ""}</span>
                <span>时间:{this.props.weeks}/52周</span>
            </div>
        )
    }
}