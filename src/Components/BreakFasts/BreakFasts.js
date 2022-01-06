import React from 'react';

import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BreakFast from '../BreakFast/BreakFast';

const BreakFasts = () => {
    const [breakfasts , setBreakfast] =useState([]);
    useEffect(()=>{

        fetch('./breakfast.Json')
        .then(res=>res.json())
        .then(data=>setBreakfast(data))
    },[])
    return (
        <div>
             <h1>Our Food</h1>

{
     <Row xs={4} md={3} className="g-5">
         {

            breakfasts.map(breakfast=><BreakFast
            
                    key={breakfast.id}
                    breakfast={breakfast}
            >

                        
            </BreakFast>
            )
         }
    </Row>
}
            
        </div>
    );
};

export default BreakFasts;