import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888
  margin-top: 2rem;
  margin-bottom: 2rem;

  .value {
    flex: 1;
    font-size: 2rem;
  }
  
  .slider {
    flex: 1;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    margin-top: 2rem;
    margin-bottom: 2rem;

  }
`;

class Slider extends Component {
  state = { value: 50 } 

  handleChange = (e) => {
    this.setState({ value: e.target.value})
  }

    render() {
      return(
        <Container>

        <Styles>
          <input type='range' 
          min={0} 
          max={255} 
          value={this.state.value} 
          className='slider'
          onChange={this.handleChange}
          />
        <div className='value'>{this.state.value}</div>
        </Styles>
          </Container>
      )
    }
}

export default Slider;