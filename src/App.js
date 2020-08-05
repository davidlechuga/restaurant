import React, {Fragment} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


//importar Páginas

import Angeles from './Restaurants/Los Angeles/Angeles.js'
import Description from './Restaurants/Los Angeles/Description.js'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Angeles} />
           <Route exact path="/angeles" component={Description} />
         </Switch>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
