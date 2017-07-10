import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchPodcastForm from "./SearchPodcastForm";
import SearchPodcastResults from "./SearchPodcastResults";

class App extends Component {
  constructor() {
    super();
    this.addPodcast = this.addPodcast.bind(this);
    this.likePodcast = this.likePodcast.bind(this);
    this.unlikePodcast = this.unlikePodcast.bind(this);
  }

  state = {
    podcasts: {}
  };

  addPodcast(podcast) {
    const podcasts = { ...this.state.podcasts };
    const timestamp = Date.now();
    podcasts[`podcast-${timestamp}`] = podcast;
    podcasts[`podcast-${timestamp}`].liked = false;
    this.setState({ podcasts });
  }

  likePodcast(podcastId) {
    const podcasts = { ...this.state.podcasts };
    podcasts[podcastId].liked = true;
    this.setState({ podcasts });
  }

  unlikePodcast(podcastId) {
    const podcasts = { ...this.state.podcasts };
    podcasts[podcastId].liked = false;
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
                <SearchPodcastResults
                  podcasts={this.state.podcasts}
                  likePodcast={this.likePodcast}
                  unlikePodcast={this.unlikePodcast}
                />}
            />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
