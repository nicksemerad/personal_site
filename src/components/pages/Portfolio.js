import React from 'react';
import { Button } from 'semantic-ui-react';
import tri from '../images/tri.png';
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
      {/* <img src={tri} style={Style.tri}/> */}
    <h1>Portfolio</h1>
      <div style={{ marginTop: '50px'}}>
        <iframe width="448" 
            height="252" 
            src="https://www.youtube.com/embed/ehe3yUOVh4Y" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <p>WARNING: Video is loud</p>
        <p>Color Board is a color scheme organizer/ social media</p>
        <Button color='black'>View Site</Button>
      </div>
      <h1> Many more in the works!</h1>
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
