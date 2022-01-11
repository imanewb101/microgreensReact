import React, { Component } from 'react'; 
import Header from './HeaderComponent'
import Footer from './FooterComponent'; 
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent'; 
import { BENEFITS } from "../shared/benefits";
import { SHOP } from "../shared/shop"; 
import { KITS } from "../shared/kits"; 
import Bubble from './BubbleComponent'; 
import Shop from './ShopComponent'; 
import About from './AboutComponent'; 
import Contact from './ContactComponent'; 
import Cart from './CartComponent'; 
import Grow from './GrowingComponent'; 

class Main extends Component {
    constructor(props){
        super(props); 
        this.state={
            benefits: BENEFITS, 
            shops: SHOP, 
            kits: KITS

        }
    }

    render() {
        //console.log(this.state.benefits.filter(benefit => benefit.featured)[0]);
        //const doubled = this.state.benefits.map((number) => number);
        //this.state.benefits.map((benefit) => benefit)[1]
        const HomePage = () => {
            return (
                <Home benefit={this.state.benefits.filter(benefit => benefit)}/>
            );
        }
        const ShopPage = () => {
           return (
                <Shop shop={this.state.shops}/>
           );
        }
        const GrowPage = () => {
            return (
                <Grow grow={this.state.kits}/>
            );
        }
        
        return (
            <div>
                <Header /> 
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path ="/growingkits" component={GrowPage}/>
                    <Route path="/aboutus" component={About}/>
                    <Route path="/contactus" component={Contact}/>
                    <Route path="/cart" component={Cart}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main; 