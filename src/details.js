import React, {Component} from 'react';

/**
 * Class responsible for details section of the application, showing the data about the image
 */
class Details extends Component{

  /**
   * Simple helper function to format text by capitalising the first letter of each word.
   * @param text
   * @returns {string}
   */
  toTitleCase(text){
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /**
   * Parsing the details data into a title and it's value.
   * @param detailsMap
   * @returns List of DOM values for rendering
   */
  showDetails(detailsMap){
    const details = []

    Object.entries(detailsMap).forEach((item) => {
      let detailTitle = String(item[0]).replace('_',' ');
      let detailValue = String(item[1]);
      if (detailValue.toString().match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)){
        detailValue = <a href={detailValue}> Click Here </a>
      }
      details.push(<p className="text-left"><b>{this.toTitleCase(detailTitle)}</b>: {detailValue}</p>)
    });

    return (
      <div>
        {details}
      </div>
    )
  }

  /**
   * Render the details data which is passed through by the properties.
   */
  render() {
    return (
      <div className="container container-bg mt-4 p-5 text-center">
        <h3 className="mb-4">Details</h3>
        {this.showDetails(this.props.details)}
      </div>
    );
  }
}

export default Details;
