import React, {Component} from 'react';

/**
 * Class responsible for the body section of the application (which will display the image)
 */
class Body extends Component {

  /**
   * Render the image passed through the properties.
   */
  render() {
    return (
      <div className="container container-bg mt-4 p-4 text-center">
        <img className="app-image rounded" src={this.props.imageSrc} alt="" />
      </div>
    );
  }
}

export default Body;