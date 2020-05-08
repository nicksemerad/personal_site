import React from 'react';
import ppic from '../images/ppic.jpg'

const Home = () => (
  <div style={{
    width: '670px',
    margin: 'auto',
    textAlign: 'center',
    height: '1000px',
    padding: '10px',
  }}>
    <h1>Nick Semerad</h1>
    <h2>About me</h2>
    <h4>Hi I'm Nick! I'm a web developer and artist,
       but I like to think that they can be the same thing.
       I am twenty years old, currently located in Salt Lake City,
       Utah. I love to create, and I'm setting my summer goal to 
       learn and create my first neural net!
       </h4>
    <img 
    width='400px'
    src={ppic} 
    alt='Profile Pic'
    border='5pxsolidblack'/>
    <h3>I use this site to showcase my work</h3>
    <h1>Enjoy :)</h1>
  </div>
)

export default Home;

