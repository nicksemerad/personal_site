import React, { Component } from 'react';

class Color extends Component {
  state = { silderValue: 0, red: 0, green: 0, blue: 0 }

  // componentDidUpdate() {
  //   const { silderValue } = this.props
  //   this.setState({ silderValue })
  // }

  handleChangeRed = (e) => {
    this.setState({ red: e.target.value})
  }

  handleChangeGreen = (e) => {
    this.setState({ green: e.target.value})
  }

  handleChangeBlue = (e) => {
    this.setState({ blue: e.target.value})
  }
  
  render() {
    return(
      <>

      </>
    )
  }


}

export default Color;