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
    textAlign: 'center',
    height: '1000px',
    padding: '10px',
    backgroundColor: '#e8ebff',
  }}>
  <h1 style={{ color: '#221C35', marginTop: '30px'}}>Technical Skills</h1>
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
  transform: 'translate(0%, 10%)'
 },
 reactText: {
  transform: 'translate(0%, -90%)',
  color: '#221C35'
 },
 rubyLogo: {
  height: '75px',
  transform: 'translate(0%, 10%)'
 },
 rubyText: {
  transform: 'translate(0%, -50%)',
  color: '#221C35'
 },
 postgresLogo: {
  height: '90px',
  transform: 'translate(0%, 20%)'
 },
 postgresText: {
  transform: 'translate(0%, -50%)',
  color: '#221C35'
 },
 htmlcssLogo: {
  height: '80px',
  transform: 'translate(290%, -525%)'
 },
 htmlcssText: {
  transform: 'translate(53%, -1490%)',
  color: '#221C35'
 },
 psLogo: {
  height: '75px',
  transform: 'translate(465%, -555%)'
 },
 psText: {
  transform: 'translate(55%, -1450%)',
  color: '#221C35'
 },
 aiLogo: {
  height: '75px',
  transform: 'translate(460%, -535%)'
 },
 aiText: {
  transform: 'translate(56%, -1390%)',
  color: '#221C35'
 },


}
export default Skills;