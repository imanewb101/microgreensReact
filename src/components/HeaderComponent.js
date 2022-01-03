import React, { Component } from 'react'; 
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap'; 
import { NavLink } from 'react-router-dom'; 

class Header extends Component {
    constructor(props){
        super(props); 

        this.toggleNav = this.toggleNav.bind(this); //when toggleNav called, this gets referred to the comopnent 
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md" className="background-green">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/img/logo.png" height="75" width="75" alt="MicroGreen Logo"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    {/*<i className="fa fa-home fa-lg"/>*/} Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/shop">
                                    {/*<i className="fa fa-list fa-lg"/>*/} Shop
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    {/* <i className="fa fa-info fa-lg"/> */}About 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    {/* <i className="fa fa-address-card fa-lg"/>*/} Contact Us 
                                </NavLink>
                            </NavItem>    
                            <NavItem>
                                <NavLink className="nav-link" to="/cart">
                                    <i className="fa fa-shopping-cart"/>
                                </NavLink>
                            </NavItem>                                                                                 
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>                
            </React.Fragment>            

        );
    };
}

export default Header; 