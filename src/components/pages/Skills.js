import React from 'react';
import react from '../images/skills/react.png';
import ruby from '../images/skills/ruby.png';
import postgres from '../images/skills/postgres.png';
import htmlcss from '../images/skills/html_css.png';
import ps from '../images/skills/ps.png';
import ai from '../images/skills/ai.png';

const Skills = () => (
  <div style={{
    width: '100%',
    textAlign: 'center',
    height: '1500px',
    padding: '60px',
    backgroundColor: '#e8ebff',
  }}>
  <h1 style={{ color: '#221C35'}}>Technical Skills</h1>

    
      <div style={{marginTop: '50px'}}>
        <h2>React JS - front end</h2>
        <img style={style.small} src={react} alt='React JS'/>
        <h4 style={{}}>React JS, developed by Facebook Engineer Jordan Walke, is the language I use the most.
          Being my most familiar language, it is what I am most comfortable with.
           I believe the syntax to be logical and simple to use, although others may disagree. 
           Having many other advantages, my frontend has never looked better with React JS.</h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2>Ruby/ Rails - back end</h2>
        <img style={style.small} src={ruby} alt='Ruby'/>
        <h4>Ruby on Rails, or ROR, is the language I use to handle my website's backend.
          ROR makes the models and controllers in an easily customizable way.
          When used in conjunction with React JS,   </h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2>PostgreSQL - database</h2>
        <img style={style.small} src={postgres} alt='PostgreSQL'/>
        <h4></h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2>CSS/ HTML - foundations</h2>
        <img style={style.small} src={htmlcss} alt='html/css'/>
        <h4></h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2 >Photoshop - image editor</h2>
        <img style={style.small} src={ps} alt='photoshop'/>
        <h4></h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2 >Illustrator - sprite creator</h2>
        <img style={style.small} src={ai} alt='illustrator'/>
        <h4></h4>
      </div>
  
  </div>
)


const style = {
small: {
 align: 'center',
 width: '60px'
},

}
export default Skills;