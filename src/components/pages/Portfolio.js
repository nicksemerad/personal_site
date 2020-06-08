import React from 'react';
import { Button } from 'semantic-ui-react';
import logo from '../images/logoC.png';

const Portfolio = () => (
  <>
  {/* <img src={logo} style={Style.logo}/> */}
    <div style={{
      width: '100%',
      margin: 'auto',
      textAlign: 'center',
      padding: '10px',
      height: '1000px',
      backgroundColor: '#e8ebff',
      marginTop: '0px'
    }}>
    <h1 style={{ color: '#221C35', marginTop: '30px'}}>Portfolio</h1>
      <div style={{ marginTop: '50px'}}>
        <h2 style={{ color: '#221C35'}}>Color Board is a color scheme organizer/ social media</h2>
        <iframe width="448" 
            height="252" 
            src="https://www.youtube.com/embed/ehe3yUOVh4Y" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <p style={{ color: '#221C35'}}>WARNING: Video is loud</p>
        <Button color='black'>View Site</Button>
      </div>
      <h2 style={{marginTop: '100px', color: '#221c35'}}> Many more in the works!</h2>
    </div>
  </>
)

const Style = {
  white: {
    color: 'White',
  },
  tri: {
    marginLeft: '71%',
    width: '90px',
    transform: 'translate(0%, -50%)'
  },
  logo: {
    marginLeft: '71%',
    width: '35px',
    transform: 'translate(60%, -5%)'
  }
}

export default Portfolio;
