import React, { Component } from 'react';
import PeopleList from '../components/PeopleList';

class App extends Component {
  constructor() {
    super()
    this.state = {
        chars: []
      }
  }

  componentDidMount() {

    // async await fetching
    const fetchPeople = async () => {
      const response = await fetch('https://swapi.co/api/people/');
      const chars = await response.json();
      // SWAPI has the information needed inside inside the results object array
      // because it's a big object with the information nested inside.
      return this.setState({ chars: chars.results});
      }    

      fetchPeople();
  }

  render() {
    return (
      <div>
        <header className="bg-near-black helvetica">
          <div className="pa3">
            <h3 className="f-headline-m f-headline-ns f-headline-l measure-narrow mv0 center-ns">
              <span className="bg-yellow lh-copy pa1 tracked-tight">Star Wars API fetching</span>
            </h3>
          </div>
        </header>
        <div className="pa4 georgia tj">
          <p className="f5 f3-ns lh-copy measure sans-serif">
            Simple webapp that fetches a random chunk of a character's data from the Star Wars API and displays it.
            There isn't much else in the APP, but it's a big step from me since it's my first Web App using React + APIs.
          </p>
        </div>
        <div>
          <PeopleList chars={this.state.chars} />
        </div>        
      </div>
    );
  }
}

export default App;
