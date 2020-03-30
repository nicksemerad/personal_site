import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return(
  <Segment inverted>

    <Menu inverted pointing secondary>

      <Link to='/'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}/>
      </Link>
      <Link to='/portfolio'>
        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}/>
      </Link>
      <Link to='/resume'>
        <Menu.Item 
          name='resume'
          active={activeItem === 'resume'}
          onClick={this.handleItemClick}/>
      </Link>
      <Link to='/art'>
        <Menu.Item
          name='art'
          active={activeItem === 'art'}
          onClick={this.handleItemClick}/>
      </Link>
      <Link to='/contact'>
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}/>
      </Link>
    </Menu>
  </Segment>    
    )
  }
}

  
  


export default Navbar;