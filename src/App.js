import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Art from './components/Art';
import Contact from './components/Contact';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import marble from './components/images/marble.jpg';

const App = () => (
    <>
      <div style={{  
        backgroundImage: `url(${marble})`
      }}>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/art' component={Art} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </>    
)

export default App;
