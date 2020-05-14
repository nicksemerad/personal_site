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
    margin: 'auto',
    textAlign: 'left',
    height: '1000px',
    padding: '10px',
    backgroundColor: '#fce8ea',
  }}>
  <h1>Technical Skills</h1>
    <div style={{
      // backgroundColor: 'rgba(0,0,0,0.05)',
      width: '670px',
      textAlign: 'center',
      height: '600px',
    }}>
      <div>
        <img  style={style.reactLogo} src={react} alt='React JS'/>
        <h2 style={style.reactText}>React JS - front end</h2>
      </div>
      <div>
        <img  style={style.rubyLogo} src={ruby} alt='Ruby'/>
        <h2 style={style.rubyText}>Ruby/ Rails - back end</h2>
      </div>
      <div>
        <img  style={style.postgresLogo} src={postgres} alt='PostgreSQL'/>
        <h2 style={style.postgresText}>PostgreSQL - database</h2>
      </div>
      <div>
        <img  style={style.htmlcssLogo} src={htmlcss} alt='html/css'/>
        <h2 style={style.htmlcssText}>CSS/ HTML - foundations</h2>
      </div>
      <div>
        <img  style={style.psLogo} src={ps} alt='photoshop'/>
        <h2 style={style.psText}>Photoshop - image editor</h2>
      </div>
      <div>
        <img  style={style.aiLogo} src={ai} alt='illustrator'/>
        <h2 style={style.aiText}>Illustrator - sprite creator</h2>
      </div>
    </div>
  
  </div>
)


const style = {
 reactLogo: {
  height: '100px',
  transform: 'translate(-260%, 10%)'
 },
 reactText: {
  transform: 'translate(-38.75%, -90%)',
  color: 'dark gray'
 },
 rubyLogo: {
  height: '75px',
  transform: 'translate(-350%, 10%)'
 },
 rubyText: {
  transform: 'translate(-39%, -50%)',
  color: 'dark gray'
 },
 postgresLogo: {
  height: '90px',
  transform: 'translate(-305%, 20%)'
 },
 postgresText: {
  transform: 'translate(-39%, -50%)',
  color: 'dark gray'
 },
 htmlcssLogo: {
  height: '80px',
  transform: 'translate(200%, -525%)'
 },
 htmlcssText: {
  transform: 'translate(37.5%, -1490%)',
  color: 'dark gray'
 },
 psLogo: {
  height: '75px',
  transform: 'translate(320%, -555%)'
 },
 psText: {
  transform: 'translate(37%, -1450%)',
  color: 'dark gray'
 },
 aiLogo: {
  height: '75px',
  transform: 'translate(320%, -535%)'
 },
 aiText: {
  transform: 'translate(37%, -1390%)',
  color: 'dark gray'
 },


}
export default Skills;