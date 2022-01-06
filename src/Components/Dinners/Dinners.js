import React from 'react';

import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BreakFast from '../BreakFast/BreakFast';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [dinners , setDinner] =useState([]);
    useEffect(()=>{

        fetch('./dinner.Json')
        .then(res=>res.json())
        .then(data=>setDinner(data))
    },[])
    return (
        <div>
             <h1>Our Food</h1>

{
     <Row xs={4} md={3} className="g-5">
         {

            dinners.map(dinner=><Dinner
            
                    key={dinner.id}
                    dinner={dinner}
            >

                        
            </Dinner>
            )
         }
    </Row>
}
            
        </div>
    );
};

export default Dinners;