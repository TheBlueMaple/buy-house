import React from 'react';
import StartPage from './StartPage';
export default class Cover extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShowStartPage:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isShowStartPage:false
            })
        },3000);
    }
    render(){
        return (
        <div className="cover">
            {this.state.isShowStartPage && <StartPage />}
        </div>
        )
    }
}