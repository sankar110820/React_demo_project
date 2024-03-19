import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

function Cardcom(props) {
    return (
        <div>
            <Card style={{
                    width: '18rem',
                }}
            >
                <img height='150px' width='120px' alt="Sample" src={props.img} /> 
                {/* props call {props.data.title} */}
                <CardBody>
                    <CardTitle tag="h5"> {props.tittle}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6"> {props.price}</CardSubtitle> 
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>


        </div>
    )
}
export default Cardcom