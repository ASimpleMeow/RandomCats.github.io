import React, {Component} from 'react';

class Details extends Component{

  toTitleCase(text){
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  showDetails(detailsMap){
    const details = []
    Object.entries(detailsMap).forEach((item) => {
      let detailTitle = item[0].replace('_',' ');
      let detailValue = item[1];
      if (item[1].toString().match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)){
        detailValue = <a href={item[1]}> Click Here </a>
      }
      details.push(<p className="text-left"><b>{this.toTitleCase(detailTitle)}</b>: {detailValue}</p>)
    });

    return (
      <div>
        {details}
      </div>
    )
  }

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
