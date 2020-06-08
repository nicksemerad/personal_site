import React from 'react';
import ppic from '../images/ppic.jpg';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const Home = () => (
  <div style={{ width: '100%'}}>

  <div style={{
    width: '100%',
    margin: 'auto',
    marginBottom: '0px',
    
    height: '1100px',
    padding: '60px',
    backgroundColor: '#e8ebff',
   
  }}>
    <div style={{textAlign: 'center'}}>

    <h1 style={{color: '#221C35'}}>Nick Semerad</h1>
    <h2 style={{color: '#2B7A78', marginTop: '100px'}}>About me</h2>
    <img 
    width='400px'
    src={ppic} 
    alt='Profile Pic'/>
    <h3 style={{color: '#221C35'}}>Hi I'm Nick! I'm a web developer and artist,
       but I like to think that they can be the same thing.
       I am twenty years old, currently located in Salt Lake City,
       Utah. I love to create, and I'm setting my summer goal to 
       learn and create my first neural net!
       </h3>
    <h3 style={{color: '#2B7A78'}}>I've decided to keep this site to showcase my work</h3>
    <h1 style={{color: '#221C35'}}>Enjoy :)</h1>
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
    </div>
)


export default Home;

