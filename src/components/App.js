import React from "react";
import { Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return( 
  <div>
   <NavBar />
   <Switch>
    <Route exact path= "/" element={<Home />}><Home />
    </Route>
    <Route path= "/directors" element={<Directors />}><Directors />
    </Route>
    <Route path= "/actors" element={<Actors />}><Actors />
    </Route>
    <Route path= "/movies" element={<Movies />}><Movies />
    </Route>
   </Switch>
  </div>
  );
}

export default App;
