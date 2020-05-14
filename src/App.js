import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import marble from './components/images/marble.jpg';

const App = () => (
    <>
      <div style={{ backgroundColor: '#6D0043'}}>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </>    
)

export default App;
