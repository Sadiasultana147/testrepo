import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Lunch from '../Lunch/Lunch';

const Lunches = () => {

    const [breakfasts , setBreakfast] =useState([]);
    useEffect(()=>{

        fetch('./lunch.Json')
        .then(res=>res.json())
        .then(data=>setBreakfast(data))
    },[])
    return (
        <div>
             <h1>Our Food</h1>

{
     <Row xs={4} md={3} className="g-5">
         {

            breakfasts.map(lunch=><Lunch
            
                    key={lunch.id}
                    lunch={lunch}
            >

            </Lunch>         
           
            )
         }
    </Row>
}
        </div>
    );
};

export default Lunches;