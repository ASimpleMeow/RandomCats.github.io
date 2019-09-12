import React, {Component} from 'react';

class Body extends Component {
  render() {
    return (
      <div className="container container-bg mt-4 p-5 text-center">
        <img className="app-image" src={this.props.imageSrc} alt="" />
      </div>
    );
  }
}

export default Body;