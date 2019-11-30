import React from 'React';
import statepage1 from '../../img/startpage1.png';
import statepage3 from '../../img/startpage3.png';
export default class StartPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className='start_page'>
            <img src={statepage1} />
            <img src={statepage3} />
        </div>
        )
    }
}