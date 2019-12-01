import React from 'React';
export default class Help extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            helpContent:[
                <div className="help_content_1"><p>游戏目标:在52周(一年)时间结束前赚到足够的前买房子。</p><p>这里显示了房价和时间，房价可不是一成不变的，每周都会上涨喔。</p></div>,
                <div className="help_content_2"><p>这里是市场，点击市场中的货物可以进行购买。</p><p>游戏的关键就是要掌握货物价格的变化区间，低买高卖</p></div>,
                <div className="help_content_3"><p>这里是你的出租屋，从市场购买的货物会存放在出租屋中。</p><p>点击货物可以卖出。</p></div>,
                <div className="help_content_4"><p>这里显示了出租屋的剩余空间和总空间。</p><p>出租屋能堆放货物的数量收出租屋的空间限制。</p></div>,
                <div className="help_content_5"><p>这里显示了你的现金、存款以及健康和名声。</p><p>健康低于95，你可能会暴毙街头。</p><p>名声太差，售楼小姐可能会不愿意把房子卖给你。</p></div>,
                <div className="help_content_6"><p>点击这里的三个按钮，上面市场中的货物和价格会方法变化，同时时间也会增加一周。</p></div>,
                <div className="help_content_7"><p>把多余的现金存到银行，可以减少损失，同时每周都能得到利息。</p></div>,
                <div className="help_content_8"><p>在医院可以花钱看病，减少暴毙街头的可能。</p></div>,
                <div className="help_content_9"><p>在售楼部你能买到心仪的房子。</p></div>,
                <div className="help_content_10"><p>在中介你可以花钱租用更多的出租屋空间，让你能买进更多的货物。</p></div>
            ],
            helpIndex : 0,
            hideNext:false
        }
    }
    nextHelp = ()=>{
        let newIndex = this.state.helpIndex+1;
        this.setState({
            helpIndex:newIndex
        });
        if(newIndex === this.state.helpContent.length-1)
            this.setState({
                hideNext:true
            })
    }
    render(){
        let content = this.state.helpContent[this.state.helpIndex];
        return(
            <div className="help">
                {content}
                <p><span onClick={()=>{this.props.hideHelp();this.props.hideCover()}}>结束教程</span>{this.state.hideNext || <span onClick={this.nextHelp}>下一步</span>}</p>
            </div>
        )
    }
}