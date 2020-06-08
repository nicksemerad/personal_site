import React from 'react';
import { Link } from 'react-router-dom';
import github from '../images/contact/github.png';
import gmail from '../images/contact/gmail.png';
import linked from '../images/contact/linked.png';
import twitter from '../images/contact/twitter.png';

const Contact = () => (
  <div style={{
    width: '100%',
    textAlign: 'center',
    height: '1000px',
    padding: '60px',
    backgroundColor: '#e8ebff'
  }}>
    <h1 style={{}}> Contact Me </h1>
    <div>
      <img style={style.gitLogo} src={github} alt='github'/>
      <h2 style={style.gitText}> /nicksemerad </h2>
    </div>
    <div>
      <img style={style.gmailLogo} src={gmail} alt='gmail'/>
      <h2 style={style.gmailText}> nicksemerad@ </h2>
    </div>
    <div>
      <img style={style.linkedLogo} src={linked} alt='linked'/>
      <h2 style={style.linkedText}> /nicholassemerad </h2>
    </div>
    <div>
      <img style={style.twitterLogo} src={twitter} alt='twitter'/>
      <h2 style={style.twitterText}> @NicholasSemerad</h2>
    </div>
    
  </div>
)
const style = {
  gitLogo: {
   height: '100px',
   transform: 'translate(-150%, 10%)'
  },
  gitText: {
   transform: 'translate(0%, -260%)',
   color: '#2B7A78'
  },
  gmailLogo: {
   height: '100px',
   transform: 'translate(170%, -30%)'
  },
  gmailText: {
   transform: 'translate(0%, -400%)',
   color: '#2B7A78'
  },
  linkedLogo: {
   height: '100px',
   transform: 'translate(-167%, -80%)'
  },
  linkedText: {
   transform: 'translate(0%, -570%)',
   color: '#2B7A78'
  },
  twitterLogo: {
   height: '100px',
   transform: 'translate(176%, -125%)'
  },
  twitterText: {
   transform: 'translate(0%, -730%)',
   color: '#2B7A78'
  },
}
export default Contact;