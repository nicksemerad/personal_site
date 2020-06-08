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
    height: '1700px',
    padding: '60px',
    backgroundColor: '#e8ebff',
  }}>
  <h1 style={{ color: '#221C35'}}>Technical Skills</h1>

    
      <div style={{marginTop: '50px'}}>
        <h2 style={{color: '#2B7A78'}}>React JS - front end</h2>
        <img style={style.small} src={react} alt='React JS'/>
        <h4>React JS, developed by Facebook Engineer Jordan Walke, is the language I use the most.
          Being my most familiar language, it is what I am most comfortable with.
           I believe the syntax to be logical and simple to use, although others may disagree. 
           Having many other advantages, my frontend has never looked better with React JS.</h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2 style={{color: '#2B7A78'}}>Ruby/ Rails - back end</h2>
        <img style={style.small} src={ruby} alt='Ruby'/>
        <h4>Ruby on Rails, or ROR, is the language I use to handle my website's backend.
          Developed by David Hansson, 
          ROR makes the models and controllers in an easily customizable way.
          When used in conjunction with React JS, the front and back end can communicate
           quickly, and efficiently.  </h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2 style={{color: '#2B7A78'}}>PostgreSQL - database</h2>
        <img style={style.small} src={postgres} alt='PostgreSQL'/>
        <h4>PostgreSQL is a database management system, known for it's extensibility and
         SQL compliance. Developed at UC Berkeley, PostgreSQL is often used with Ruby on Rails, 
         and is the database system that I use for my backend.  </h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2 style={{color: '#2B7A78'}}>CSS/ HTML - foundations</h2>
        <img style={style.small} src={htmlcss} alt='html/css'/>
        <h4> Cascading Style Sheets and Hypertext Markup Language, or CSS and HTML are the foundations
          of the internet, and websites in general. Therefore, my websites are also based in HTML.
           I tend to style my pages with other tools besides CSS, but I usually use at least some CSS elements.
        </h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2 style={{color: '#2B7A78'}}>Photoshop - image editor</h2>
        <img style={style.small} src={ps} alt='photoshop'/>
        <h4> Adobe Photoshop is the tool I have been using the longest, without a doubt.
          Being easy to use, and intuitive, Photoshop is my go-to for any sort of image or icon that I am displaying 
          anywhere on the web. Although, it does have some downsides in some situations.
        </h4>
      </div>
      <div style={{marginTop: '50px'}}>
        <h2 style={{color: '#2B7A78'}}>Illustrator - sprite creator</h2>
        <img style={style.small} src={ai} alt='illustrator'/>
        <h4>Where Adobe Photoshop fails, Illustrator excels. Being vector based instead of pixel based,
          you can zoom in on a Sprite in Illustrator, and it will never blur. Because of this, it is a vital
          tool in making scalable images.   </h4>
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