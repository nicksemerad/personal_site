import React from 'react';
import { Button } from 'semantic-ui-react';

const Portfolio = () => (
  <>
  <div style={{
    width: '470px',
    margin: 'auto',
    textAlign: 'center',
    padding: '10px',
    height: '1000px'
  }}>
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
  </div>
  </>
)

export default Portfolio;
