import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return(
      <div style={{
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        padding: '10px'
      }}>
        <Menu ui pointing secondary>
          <Link to='/'>
            <Menu.Item
              style={{ color: 'white'}}
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}/>
          </Link>
          <Link to='/portfolio'>
            <Menu.Item
              style={{ color: 'white'}}
              name='portfolio'
              active={activeItem === 'portfolio'}
              onClick={this.handleItemClick}/>
          </Link>
          <Link to='/skills'>
            <Menu.Item 
              style={{ color: 'white'}}
              name='skills'
              active={activeItem === 'skills'}
              onClick={this.handleItemClick}/>
          </Link>
          <Link to='/resume'>
            <Menu.Item
              style={{ color: 'white'}}
              name='resume'
              active={activeItem === 'resume'}
              onClick={this.handleItemClick}/>
          </Link>
          <Link to='/contact'>
            <Menu.Item
              style={{ color: 'white'}}
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}/>
          </Link>
          <a href='https://github.com/nicksemerad' 
            target='_blank'
            rel="noopener noreferrer">
            <Menu.Item
              style={{ color: 'white'}}
              name='Github'/>
          </a>
        </Menu>
      </div>
    )
  }
}

export default Navbar;