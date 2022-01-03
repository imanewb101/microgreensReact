import React, { Component } from 'react'; 
import Header from './HeaderComponent'
import Footer from './FooterComponent'; 
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent'; 
import { BENEFITS } from "../shared/benefits";
import Bubble from './BubbleComponent'; 
import Shop from './ShopComponent'; 
import About from './AboutComponent'; 
import Contact from './ContactComponent'; 
import Cart from './CartComponent'; 

class Main extends Component {
    constructor(props){
        super(props); 
        this.state={
            benefits: BENEFITS
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
        
        return (
            <div>
                <Header /> 
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/shop" component={Shop}/>
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