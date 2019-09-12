import React, {Component} from 'react';

class Details extends Component{
  showDetails(detailsMap){
    const details = []
    for (const [detail, value] of Object.entries(detailsMap)) {
      details.push(<p className="text-left"><b>{detail}</b>: {value}</p>)
    }

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
