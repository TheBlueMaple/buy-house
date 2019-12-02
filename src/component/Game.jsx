import React from 'react';
import Cover from './Cover/Cover';
import Entity from './Entity/Entity';
import Btn_zjyd_m from '../img/btn_zjyd_m.png';
import Btn_zjyd_w from '../img/btn_zjyd_w.png';
import Btn_slrj_m from '../img/btn_slrj_m.png';
import Btn_slrj_w from '../img/btn_slrj_w.png';
import Btn_dgy_m from '../img/btn_dgy_m.png';
import Btn_dgy_w from '../img/btn_dgy_w.png';
import Btn_jknf_m from '../img/btn_jknf_m.png';
import Btn_jknf_w from '../img/btn_jknf_w.png';
import Btn_fdmj_m from '../img/btn_fdmj_m.png';
import Btn_fdmj_w from '../img/btn_fdmj_w.png';
import Btn_hjss_m from '../img/btn_hjss_m.png';
import Btn_hjss_w from '../img/btn_hjss_w.png';
import Btn_spsj_m from '../img/btn_spsj_m.png';
import Btn_spsj_w from '../img/btn_spsj_w.png';
import Btn_gcqc_m from '../img/btn_gcqc_m.png';
import Btn_gcqc_w from '../img/btn_gcqc_w.png';
export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            housePrice:0,
            weeks :0,
            coupon:50000,
            cash : 0,
            startCash:3000,
            health:100,
            deposit:0,
            fame:100,
            inputNumber:0,
            currentMarket:[],
            currentBuyAsk:{
                max:0
            },
            repertory:[
                {
                    name:"zjyd",
                    element:<img src={Btn_zjyd_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'slrj',
                    element:<img src={Btn_slrj_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'dgy',
                    element:<img src={Btn_dgy_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'jknf',
                    element:<img src={Btn_jknf_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'fdmj',
                    element:<img src={Btn_fdmj_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'hjss',
                    element:<img src={Btn_hjss_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'spsj',
                    element:<img src={Btn_spsj_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'gcqc',
                    element:<img src={Btn_gcqc_w} />,
                    count:0,
                    buyingPrice:0
                },
            ],
            repertoryStatus:{
                free:100,
                limit:100
            },
            isShowCover:true,
            isShowHelp:false,
            isShowStartPage:true,
            isPlay:false,
            isShowStartCash:false,
            isShowMarket:false,
            isShowAskGameOver:false,
            isShowBuyAsk:false
        }
    }
    // 引导页控制
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isShowStartPage:false
            });
            this.hideCover();
        },2000);
    }
    hideStartPage = ()=>{
        this.setState({
            isShowStartPage:false
        })
    }
    // 悬浮层控制
    hideCover = ()=>{
        this.setState({
            isShowCover:false
        })
    }
    showCover = ()=>{
        this.setState({
            isShowCover:true
        })
    }
    // 帮助层控制
    showHelp = ()=>{
        this.setState({
            isShowHelp:true
        })
    }
    hideHelp = ()=>{
        this.setState({
            isShowHelp:false
        })
    }
    // 开始游戏
    start = ()=>{
        this.showCover();
        this.setState({
            isShowStartCash:true
        })
    }
    // 控制开始金额组件
    decCash = ()=>{
        if(this.state.startCash > 3000){
            let newCoupon = this.state.coupon + 1000;
            let newCash = this.state.startCash - 1000;
            this.setState({
                coupon:newCoupon,
                startCash:newCash
            })
        }
    }
    addCash = ()=>{
        if(this.state.coupon >= 1000){
            let newCoupon = this.state.coupon - 1000;
            let newCash = this.state.startCash + 1000;
            this.setState({
                coupon:newCoupon,
                startCash:newCash
            })
        }
    }
    // 控制游戏开始与结束
    startGame = ()=>{
        this.setState({
            isShowStartCash:false,
            isShowCover:false,
            cash:this.state.startCash,
            housePrice:40,
            isPlay:true,
            isShowMarket:true
        },()=>this.refreshMarket());
    }
    gameOver = ()=>{
        
        this.setState({
            housePrice:0,
            weeks :0,
            coupon:50000,
            cash : 0,
            startCash:3000,
            health:100,
            deposit:0,
            fame:100,
            inputNumber:0,
            currentMarket:[],
            currentBuyAsk:{
                max:0
            },
            repertory:[
                {
                    name:"zjyd",
                    element:<img src={Btn_zjyd_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'slrj',
                    element:<img src={Btn_slrj_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'dgy',
                    element:<img src={Btn_dgy_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'jknf',
                    element:<img src={Btn_jknf_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'fdmj',
                    element:<img src={Btn_fdmj_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'hjss',
                    element:<img src={Btn_hjss_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'spsj',
                    element:<img src={Btn_spsj_w} />,
                    count:0,
                    buyingPrice:0
                },
                {
                    name:'gcqc',
                    element:<img src={Btn_gcqc_w} />,
                    count:0,
                    buyingPrice:0
                },
            ],
            repertoryStatus:{
                free:100,
                limit:100
            },
            isShowCover:true,
            isShowHelp:false,
            isShowStartPage:true,
            isPlay:false,
            isShowStartCash:false,
            isShowMarket:false,
            isShowAskGameOver:false,
            isShowBuyAsk:false
        })
    }
    cancelGame = ()=>{
        this.setState({
            startCash:3000,
            coupon:50000,
            isShowStartCash:false,
            isShowCover:false
        });
    }
    showAskGameOver = ()=>{
        this.showCover();
        this.setState({
            isShowAskGameOver:true
        })
    }
    hideAskGameOver = ()=>{
        this.hideCover();
        this.setState({
            isShowAskGameOver:false
        })
    }
    // 刷新市场变化
    refreshMarket = ()=>{
        // 还没开始游戏禁止刷新市场
        if(!this.state.isPlay)
            return;
        if(this.state.weeks === 52)
            this.gameOver();
        this.setState({
            weeks:this.state.weeks+1
        });
        let marketPool = [
            {
                name:'zjyd',
                element:<img src={Btn_zjyd_m} />,
                min:50,
                max:120,
                lucky:130,
                unlucky:30,
            },
            {
                name:'slrj',
                element:<img src={Btn_slrj_m} />,
                min:120,
                max:250,
                lucky:150,
                unlucky:90,
            },
            {
                name:'dgy',
                element:<img src={Btn_dgy_m} />,
                min:250,
                max:500,
                lucky:500,
                unlucky:200,
            },
            {
                name:'jknf',
                element:<img src={Btn_jknf_m} />,
                min:500,
                max:1000,
                lucky:800,
                unlucky:350
            },
            {
                name:'fdmj',
                element:<img src={Btn_fdmj_m} />,
                min:1000,
                max:2000,
                lucky:2000,
                unlucky:500
            },
            {
                name:'hjss',
                element:<img src={Btn_hjss_m} />,
                min:2000,
                max:4000,
                lucky:1500,
                unlucky:1000
            },
            {
                name:'spsj',
                element:<img src={Btn_spsj_m} />,
                min:5000,
                max:10000,
                lucky:20000,
                unlucky:3000
            },
            {
                name:'gcqc',
                element:<img src={Btn_gcqc_m} />,
                min:13000,
                max:26000,
                lucky:20000,
                unlucky:8000
            }
        ];
        // 随机抽取5个
        let currentMarket = marketPool.sort(()=>0.5-Math.random()).slice(0,5);
        // 决定熊市还是牛市
        let isRise = Math.round(Math.random());
        // 抽取幸运儿 索引
        let favorite = Math.floor(Math.random()*5);
        this.setState({
            currentMarket:currentMarket.map((item,index)=>{
                let price = parseInt(Math.random()*(item.max-item.min+1)+item.min);
                if(index == favorite && isRise)
                    item.price = price+item.lucky;
                else if(index == favorite && !isRise)
                    item.price = price-item.unlucky;
                else
                    item.price = price;
                return item;
            })
        })
    }
    // 控制买卖
    buyCommodity = (commodity,balance)=>{
        let name = commodity.name;
        let price = commodity.price;
        let element = commodity.element;
        let max = Math.floor(balance/price);
        if(max > this.state.repertoryStatus.free)
            max = this.state.repertoryStatus.free;
        this.setState({
            isShowCover:true,
            isShowBuyAsk:true,
            currentBuyAsk:{
                element:element,
                max:max,
                name:name,
                price:price
            },
            inputNumber:max
        })
    }
    changeInputNumber = (event) => {
        let value  = event.target.value;
        if(value > this.state.currentBuyAsk.max)
            value = this.state.currentBuyAsk.max;
        else if(value < 0)
            value = 0;
        value = Math.floor(value);
        this.setState({
            inputNumber:value
        });
    }
    buy = ()=>{
        let repertory = this.state.repertory;
        let name = this.state.currentBuyAsk.name;
        let price = this.state.currentBuyAsk.price;
        let input = this.state.inputNumber;
        let repertoryStatus = this.state.repertoryStatus;
        let cash  = this.state.cash;
        for(let i of repertory){
            if(i.name == name){
                repertoryStatus.free = repertoryStatus.free - input;
                cash = cash - price*input;
                i.buyingPrice = ((i.buyingPrice*i.count)+(price*input))/(i.count+input);
                i.buyingPrice = Math.floor(i.buyingPrice);
                i.count = i.count+input;
                this.setState({
                    isShowCover:false,
                    isShowBuyAsk:false,
                    repertory:repertory,
                    repertoryStatus:repertoryStatus,
                    cash:cash
                });
                return;
            }
        }
    }
    render(){
        return(
            <div className="container">
                {this.state.isShowCover && 
                <Cover 
                    {...this.state} 
                    hideCover={this.hideCover} 
                    hideHelp={this.hideHelp} 
                    addCash={this.addCash} 
                    decCash={this.decCash} 
                    startGame={this.startGame} 
                    cancelGame={this.cancelGame}
                    hideAskGameOver={this.hideAskGameOver}
                    gameOver={this.gameOver}
                    changeInputNumber={this.changeInputNumber}
                    buy={this.buy} />}

                <Entity 
                    {...this.state} 
                    showCover={this.showCover} 
                    showHelp={this.showHelp} 
                    start={this.start} 
                    showAskGameOver={this.showAskGameOver}
                    refreshMarket={this.refreshMarket}
                    buyCommodity={this.buyCommodity} />
            </div>
        )
    }
}