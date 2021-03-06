import React from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, CardSubtitle, Button, Container} from 'reactstrap'; 
import Main from "./MainComponent"; 
import Benefit from "./BubbleComponent"; 

function RenderShop({p}){
    //console.log(p);
    return(
        <div>
            <Card
                width="15rem"
                className="mt-5"
            >
                <CardImg
                alt={p.plant}
                src={p.image}
                top
                height= "250rem"
                />
                <CardBody>
                    <CardTitle>
                        {p.plant}
                    </CardTitle>
                <CardText center>
                    {p.price}
                </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function Shop({shop}){

    /*
    const shop = props.shops.map(partner => {
        return (

        )
    })
    */
   //console.log(shop);
   let plantCards = shop.map(p => {
       return (
            <Col sm="3">
                <RenderShop p={p}/>
            </Col>
       )
   })
   console.log(plantCards);


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
            <Row mt={3}>
                {plantCards}    
            </Row>
        </Container>                        
    );
}


export default Shop; 