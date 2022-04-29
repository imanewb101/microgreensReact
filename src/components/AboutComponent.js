import React, { Component } from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Media, Col, Row } from 'reactstrap'; 
import Main from "./MainComponent"; 
import Benefit from "./BubbleComponent"; 
import {GALIMAGES} from "../shared/gallary";


function RenderGal({g}){
    return(
        <div>
            <Card
                className="mt-5"
            >
                <CardImg
                src={g}
                top
                width= "250px"
                height= "250px"
                />
            </Card>
        </div>
    );    
}



function About({gal}){
   let galCards = gal.map(g=> {
       return (
            <Col sm="3">
                <RenderGal g={g}/>
            </Col>
       )
   })

    return (
        <React.Fragment>
            <div className="container">
                <h1 className="aboutUs">About Us</h1>
                <p className="pt-3">Nothing is quite so personal as the food we choose to nourish ourselves with. Food heals, brings people together,
            nourishes, and comforts. It must be fresh, delicious, and versatile.</p>
                <h2><strong>One with mother nature</strong></h2> 
                <p className="pt-3">At MicroWorld, our seeds are not genetically modified. We don’t use pesticides or herbacides. We grow in
                coconut coir, with some help from earthworm castings, and compost--you know, stuff you might find in the ground.</p>
                
                <p>We grow microgreens exposed to the outdoors with natural sunlight and fluctuations in temperature from day-to-night and
                from summer-to-winter. Microgreens are drought-friendly.</p>
                
                <p>After harvesting, roots and leftover microgreen stems become food for our chickens, worms, quail, or compost. We reuse
                our growing trays, and will even reuse the trays bought by our market customers. Our goal is to grow in step with nature
                and provide great, nutritious food for our community.</p>
                
                <Media left href="#">
                    <Media
                        object
                        src="../assets/img/Drawing.png"
                        alt="cat"
                    />
                </Media>
                <h2>Nefeli and Elissa</h2>
                <p>Neither of us thought we'd ever own a farming business, but here we are! Nefeli was a fitness trainer for Planet Fitness. Elissa was being Elissa. Now we grow food.</p>  
    
                <h2><strong>INSTAGRAM @MICRO_WORLD</strong></h2>

                <Row mt={3}>
                    {galCards}    
                </Row>
            </div>    
        </React.Fragment>
        
    );    
};

export default About; 