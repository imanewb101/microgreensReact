import React from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'; 

function RenderBenefit({item}) {

    console.log(item);
    {/* <CardText>{item.description}</CardText> */}
    
    return (
        <Card className="benefit border-0">
            <CardImg src={item.image} alt={item.name} className="rounded-circle"/>
            <CardBody>
                <CardTitle>{item.description}</CardTitle>
            </CardBody>
        </Card>
    );
}

function Benefit(props){
    return(
        <div className="container">
            <div className="row mx-auto justify-content-center">
                <div className="col-md-2 benefit">
                    <RenderBenefit item={props.item[0]}/>
                </div>
                <div className="col-md-2 benefit">
                    <RenderBenefit item={props.item[1]}/>
                </div>
                <div className="col-md-2 benefit">
                    <RenderBenefit item={props.item[2]}/>
                </div>
                <div className="col-md-2 benefit">
                    <RenderBenefit item={props.item[3]}/>
                </div>
                <div className="col-md-2 benefit">
                    <RenderBenefit item={props.item[4]}/>
                </div>
            </div>
        </div>
    );
}

export default Benefit; 