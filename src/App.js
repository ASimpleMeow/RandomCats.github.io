import React, {Component} from 'react';
import Header from './header.js';
import Body from './body';
import Details from "./details";


/**
 * Main class of this web application.
 */
class App extends Component {

  /**
   * Constructor to set the initial state of this component
   * @param props
   */
  constructor(props){
    super(props);
    this.state = {
      image: "",
      details: {},
      data: [],
    }
  }

  /**
   * After the component is mounted successfully fetch the data from Rest API
   */
  componentDidMount() {
    this.fetchData();
  }

  /**
   * Fetch all the remote data and store it in components state.
   * Once all the data has been loaded successfully, call the onClick handler to present the data.
   */
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
      })
      .then(() => {this.fetchImages()});
  }

  /**
   * Fetch all the images for the corresponding data.
   */
  fetchImages(){
    this.state.data.forEach((cat, index) => {
      fetch("https://api.thecatapi.com/v1/images/search?breed_ids="+cat.id)
        .then(res => res.json())
        .then((data) => {
          if (data && data.length > 0){
            cat.image = data[0].url ? data[0].url : '/images/no-image.png';
          } else {
            cat.image = '/images/no-image.png';
          }
        })
        .then(() => {
          if (index >= this.state.data.length -1) this.handleOnClick();
        });
    });
  }

  /**
   * OnClick handler for the next button in the application.
   * Generates a random index and uses that to select the data.
   */
  handleOnClick(){
    let randomIndex = Math.floor(Math.random() * (this.state.data.length-1));
    let state = this.state;
    let data = this.state.data.slice();
    let details = data[randomIndex];
    state.image = details.image;

    // Hiding the properties from the details we don't want to show
    delete details.image;
    delete details.id;

    state.details = details;
    this.setState(state);
  }

  /**
   * Render function which will handle how the data is going to be shown.
   */
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
