import React from 'react'; 
import { Link } from 'react-router-dom'; 

function Footer(props){
    return (
    <footer className="page-footer font-small stylish-color-dark pt-4">

        <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
                <a className="btn-floating btn-fb mx-1">
                    <i className="fa fa-facebook-f
                    fa-2x"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-tw mx-1">
                    <i className="fa fa-twitter fa-2x"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-gplus mx-1">
                    <i className="fa fa-instagram fa-2x"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-li mx-1">
                    <i className="fa fa-pinterest fa-2x"> </i>
                </a>
            </li>
        </ul>
        
        <nav className="footer-nav text-center">
            <div className="footer-nav-group">
                <a href="faq.html" className="footer-nav-item">Faq</a>
                <a href="privacy.html" className="footer-nav-item">Privacy</a>
                <a href="termsofuse.html" className="footer-nav-item">Terms of Use</a>
                <a href="contactus.html" className="footer-nav-item">Contact</a>
                <a href="signup.html" className="footer-nav-item">Sign Up</a>
            </div>
        </nav>
        
        <div className="footer-copyright text-center py-3">© 2021 Copyright:
            <a href="https://mdbootstrap.com/"> mgworld.com</a>
        </div>
        

    </footer>
    );
}

export default Footer; 