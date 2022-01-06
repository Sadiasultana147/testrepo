import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BreakFast = (props) => {

    const{name,Category, description} = props.breakfast;
    return (
       
            
            <Col  >
                 <Card className ="card " >
                        <Card.Img variant="top"  />
                        <Card.Body>
                        <Card.Title> <h1>{name}</h1> </Card.Title>
                        <Card.Text>
                    
                        
                        <h5>Category : {Category}</h5>
                        <h4>{description}</h4>
                    
                        </Card.Text>
                        </Card.Body>
                </Card>
      </Col>


            
       
    );
};

export default BreakFast;