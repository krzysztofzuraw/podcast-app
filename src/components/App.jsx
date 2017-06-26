import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchPodcastForm from "./SearchPodcastForm";
import SearchPodcastResults from "./SearchPodcastResults";

class App extends Component {
  constructor() {
    super();
    this.addPodcast = this.addPodcast.bind(this);
  }

  state = {
    podcasts: {}
  };

  addPodcast(podcast) {
    const podcasts = { ...this.state.podcasts };
    const timestamp = Date.now();
    podcasts[`podcast-${timestamp}`] = podcast;
    this.setState({ podcasts });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props =>
                <SearchPodcastForm addPodcast={this.addPodcast} {...props} />}
            />
            <Route
              path="/search/:title"
              render={props =>
                <SearchPodcastResults podcasts={this.state.podcasts} />}
            />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
