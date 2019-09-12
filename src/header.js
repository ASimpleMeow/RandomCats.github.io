import React, {Component} from 'react';

/**
 * Class responsible for the header section of the application
 */
class Header extends Component {

  /**
   * Render the header section, pass on the onClick handler from the properties to the button DOM
   */
  render() {
    return (
      <div className="container mx-auto mt-5 p-4 container-bg">
        <h1 className="text-left"> Welcome to the Random Cats App </h1>
        <div className="text-right">
          <button type="button" className="btn btn-primary" onClick={() => this.props.onClick()}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Header;