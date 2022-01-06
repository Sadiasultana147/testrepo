import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';


import 'bootstrap/dist/css/bootstrap.min.css';
import BreakFasts from './Components/BreakFasts/BreakFasts';
import Lunches from './Components/Lunches/Lunches';
import Dinners from './Components/Dinners/Dinners';

function App() {

  
  return (
    <div className="App">
        <BrowserRouter>
         <Header></Header>
          <Switch>
                
         
              <Route to path ="/breakfast">
                    <BreakFasts></BreakFasts>
            </Route> 

            <Route to path ="/lunch">
                    <Lunches></Lunches>
            </Route> 
            <Route to path ="/dinner">
                    <Dinners></Dinners>
            </Route> 
            
            
           

           
            
                 
              
          </Switch>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
