import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header className="bg-near-black helvetica">
          <div class="pa3">
            <h3 className="f-headline-m f-headline-ns f-headline-l measure-narrow mv0 center-ns">
              <span className="bg-yellow lh-copy pa1 tracked-tight">Star Wars API fetching</span>
            </h3>
          </div>
        </header>
        <div className="pa4 georgia tj">
          <p className="f5 f3-ns lh-copy measure sans-serif">
            Simple web app that fetches a random chunk of a character's data from the Star Wars API and displays it.
            There isn't much else in the APP, but it's a big step from me since it's my first Web App using React + APIs.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
