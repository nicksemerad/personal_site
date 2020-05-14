import React from 'react';
import ppic from '../images/ppic.jpg';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import tri from '../images/tri.png';
import logo from '../images/logoC.png'


const Home = () => (
  <div style={{ width: '100%'}}>
    <img src={logo} style={Style.logo}/>

  <div style={{
    width: '100%',
    margin: 'auto',
    marginBottom: '0px',
    textAlign: 'left',
    height: '1000px',
    padding: '10px',
    backgroundColor: '#fce8ea',
    marginTop: '20px'
  }}>
    <img src={tri} style={Style.tri}/>
    
    <h1 style={{color: '#6D0043'}}>Nick Semerad</h1>
    <h2 style={{color: '#515051', marginTop: '100px'}}>About me</h2>
    <h4 style={{color: '#6D0043', marginRight: '50%'}}>Hi I'm Nick! I'm a web developer and artist,
       but I like to think that they can be the same thing.
       I am twenty years old, currently located in Salt Lake City,
       Utah. I love to create, and I'm setting my summer goal to 
       learn and create my first neural net!
       </h4>
    <img 
    width='400px'
    src={ppic} 
    alt='Profile Pic'/>
    <h3 style={{color: '#6D0043'}}>I've decided to keep this site to showcase my work</h3>
    <h1 style={{color: '#6D0043'}}>Enjoy :)</h1>
    <div style={{marginTop: '50px'}}>
      <Button color='black'>
        <Link to="/portfolio" style={{color:'#FFF'}}>
        Portfolio</Link>
      </Button>
      <Button color='black'>
        <Link to="/skills" style={{color:'#FFF'}}>
        Skills</Link>
      </Button>
      <Button color='black'>
        <Link to="/art" style={{color:'#FFF'}}>
        Art</Link>
      </Button>
      <Button color='black'>
        <Link to="/contact" style={{color:'#FFF'}}>
        Contact</Link>
      </Button>
    </div>
  </div>
  </div>
)
const Style = {
  white: {
    color: 'White',
  },
  tri: {
    marginLeft: '10%',
    transform: 'translate(0%, -20%)'
  },
  logo: {
    marginLeft: '10%',
    transform: 'translate(20%, 10%)'
  }
}

export default Home;

