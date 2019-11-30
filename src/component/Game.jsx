import React from 'react';
import Cover from './Cover/Cover';
import Entity from './Entity/Entity';
export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="container">
                {/* <Cover /> */}
                <Entity />
            </div>
        )
    }
}