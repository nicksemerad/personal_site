import React, { Component } from 'react';
import styled from 'styled-components';
import Color from './ColorProvider';

const Styles = styled.div`
  display: flex;
  align-items: center;
  
  .slider {
    flex: 10;
    width: 300px;
    -webkit-appearence: none;
    margin-left: 2rem;
  }
  
`;

class Slider extends Component {
  state = { sliderValue: 50 } 

  handleChange = (e) => {
    this.setState({ sliderValue: e.target.value})
  }
  
  render() {
      const { sliderValue } = this.state
      return(
        <>
        <Styles>
          <input type='range' 
          min={0} 
          max={826} 
          value={sliderValue} 
          className='slider'
          cursor='pointer'
          onChange={this.handleChange}
          />
          <div className='value'>{sliderValue}</div>
        </Styles>
        <Color />
        </>
      )
    }
}



export default Slider;