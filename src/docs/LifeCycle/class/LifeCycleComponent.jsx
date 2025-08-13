import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  state = {
    number : 0,
    color : null ,
  }

  onClickToIncrease = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  colorRef = null

  render() {
    return (
      <div>
        <div>
          <div
            ref={(el) => this.colorRef = el}
            style={{
              width : "100px",
              height: "100px",
              backgroundColor: this.state.color,
              display: "flex",
              justifyContent : "center",
              alignItems : "center",
              color : "white"
            }}
          >
            <h1>{this.state.number}</h1>
          </div>
        </div>
        <button onClick={this.onClickToIncrease}>더하기 버튼</button>
      </div>
    );
  }
}

export default LifeCycleComponent;