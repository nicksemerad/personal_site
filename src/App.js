import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import Portfolio from './components/shared/Portfolio';
import Resume from './components/shared/Resume';
import Art from './components/shared/Art';
import Contact from './components/shared/Contact';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';

const App = () => (
    <>
      <Navbar/>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/art' component={Art} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </>
)

export default App;
