import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import './App.css';
import Description from './Components/Description/Description';
import Home from './Components/Home/Home';


export const CategoryContext = createContext();
function App() {
  const [category, setCategory] = useState({})
  return (
    <div className="bg-success">
      <CategoryContext.Provider value={[category, setCategory]}>
           <Router>
             <Switch>
                  <Route path="/home">
                     <Home/>
                  </Route>
                  <Route path="/description">
                     <Description/>
                  </Route>
                 <Route exact path="/">
                    <Home />
                 </Route>
            </Switch>
            </Router>
       </CategoryContext.Provider>
    </div>
  );
}

export default App;