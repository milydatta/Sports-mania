import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Club from './Components/Club/Club';
import Header from './Components/Header/Header';
import League from "./Components/League/League";

function App() {
  return (
    <div className="bg-success">
              <Router>
         <div>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
          </ul>
         <Switch>
         <Route exact path="/">
            <Header />
          </Route>
           <Route path="/leagues/:idLeague">
                  <League></League>
           </Route>
         </Switch>
         </div>
       </Router>
       
      
       <Club></Club>

    </div>
  );
}

export default App;
