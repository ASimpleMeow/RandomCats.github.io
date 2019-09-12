import React, {Component} from 'react';
import Header from './header.js';
import Body from './body';
import Details from "./details";


class App extends Component {

  handleOnClick(){
    alert('Clicked');
  }

  render() {
    let test = {
      test1: "not test",
      test2: "yes test",
      test3: "ok"
    };

    return (
      <div>
        <Header onClick={() => this.handleOnClick()}/>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-sm">
              <Body imageSrc="https://assets.pernod-ricard.com/nz/media_images/test.jpg?hUV74FvXQrWUBk1P2.fBvzoBUmjZ1wct"/>
            </div>
            <div className="col-sm">
              <Details details={test}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
