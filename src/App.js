import React, {Component} from 'react';
import Header from './header.js';
import Body from './body';
import Details from "./details";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      image: "",
      details: {},
      data: [],
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(res => res.json())
      .then((data) => {
        data.forEach((cat) => {
          this.state.data.push({
            breed: cat.name,
            description: cat.description,
            origin: cat.origin,
            intelligence: cat.intelligence,
            life_span: cat.life_span,
            temperament: cat.temperament,
            wikipedia_link: cat.wikipedia_url,
            id: cat.id,
          });
        });
      }).finally(() => {this.handleOnClick()});
  }

  handleOnClick(){
    let randomIndex = Math.floor(Math.random() * (this.state.data.length-1));
    let state = this.state;
    let details = this.state.data[randomIndex];
    fetch("https://api.thecatapi.com/v1/images/search?breed_ids="+details.id)
      .then(res => res.json())
      .then((data) => {
        state.details = details;
        state.image = data[0].url;
        this.setState(state);
      });
  }

  render() {
    return (
      <div>
        <Header onClick={() => this.handleOnClick()}/>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-sm">
              <Body imageSrc={this.state.image}/>
            </div>
            <div className="col-sm">
              <Details details={this.state.details}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
