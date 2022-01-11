import React from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Row, Col, Container } from 'reactstrap'; 
import Main from "./MainComponent"; 
import Benefit from "./BubbleComponent"; 

function RenderGrowing({g}){
    return(
        <div>
            <Card
                width="30rem"
                className="mt-5"
            >
                <CardImg
                alt={g.kit}
                src={g.image}
                top
                height= "250rem"
                />
                <CardTitle>
                    {g.kit}
                </CardTitle>
                <CardBody>
                    <CardTitle>
                        {g.text0.plantTitle}
                    </CardTitle>
                        {g.text0.plantText}
                    <CardTitle>
                        {g.text1.plantTitle}
                    </CardTitle>
                        {g.text1.plantText}
                <CardText center>
                </CardText>
                </CardBody>
                <Button color="primary">{g.buttonText}</Button>{' '}
            </Card>
        </div>
    );
}

function Grow({grow}){

    /*
    const shop = props.shops.map(partner => {
        return (

        )
    })
    */
   //console.log(shop);
   let growingCards = grow.map(g => {
       return (
        <Row>
            <Col>
                <RenderGrowing g={g}/>
            </Col>
        </Row>
       )
   });


   {/*  
        </Container>
            <div className="row mt-3">
                <div className="col-md-3 m-1">
                    <RenderShop p={props.shop}/>
                </div>
            </div>
        </div>
        */}
    return(
        <Container>
                {growingCards}    
        </Container>                        
    );
}

export default Grow; 