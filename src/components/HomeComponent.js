import React from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'; 
import Main from "./MainComponent"; 
import Benefit from "./BubbleComponent"; 

function Home(props){
    //console.log(props);
    return(
        <div className="container mw-100">
            
            <h1 className="mw-100">Prioritize your health and wellbeing with every meal you eat.</h1>
            <div className="background-white">
                <Benefit item={props.benefit}/>
            </div>
            <h2>Locally grown, with passion and with the objective for providing a nuroshing meal.</h2>
            <h4>
                Nothing is quite so personal as the food we choose to nourish ourselves with. Food heals, brings people together, and comforts. It must be fresh, delicious, and versatile. 
            </h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="../assets/img/o.jpg" alt="Girl in a jacket" width="500" height="500"></img>    
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div class="col-md-6">
                                <img src="../assets/img/o.jpg" alt="Girl in a jacket" width="250" height="250"></img> 
                            </div>
                            <div class="col-md-6">
                                <img src="../assets/img/o.jpg" alt="Girl in a jacket" width="250" height="250"></img> 
                            </div>                           
                        </div>
                        <div className="row">
                            <div class="col-md-6">
                                <img src="../assets/img/o.jpg" alt="Girl in a jacket" width="250" height="250"></img> 
                            </div>
                            <div class="col-md-6">
                                <img src="../assets/img/o.jpg" alt="Girl in a jacket" width="250" height="250"></img> 
                            </div>                           
                        </div>
                    </div>
                </div>
                
            </div>
        </div>    
        
    );
}
export default Home; 