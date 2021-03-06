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
    this.cleanUnlikedPodcasts = this.cleanUnlikedPodcasts.bind(this);
  }

  state = {
    liked: {},
    unliked: {}
  };
  
  componentWillMount() {
    const localStorageRef = localStorage.getItem("liked");

    if (localStorageRef) {
      this.setState({
        liked: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const liked = {...nextState.liked};
    localStorage.setItem("liked", JSON.stringify(liked));
  }

  addPodcast(podcast) {
    const unliked = { ...this.state.unliked };
    unliked[podcast.trackId] = podcast;
    this.setState({ unliked });
  }

  likePodcast(podcastId) {
    const liked = { ...this.state.liked };
    const unliked = { ...this.state.unliked};
    liked[podcastId] = unliked[podcastId];
    delete unliked[podcastId];
    this.setState({ liked, unliked });
  }

  unlikePodcast(podcastId) {
    const liked = { ...this.state.liked };
    const unliked = { ...this.state.unliked};
    unliked[podcastId] = liked[podcastId];
    delete liked[podcastId];
    this.setState({ liked, unliked });
  }

  cleanUnlikedPodcasts() {
    this.setState({ unliked: {}})
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
                <SearchPodcastForm addPodcast={this.addPodcast} {...props} cleanUnlikedPodcasts={this.cleanUnlikedPodcasts} />}
            />
            <Route
              path="/search/:title"
              render={props =>
                <SearchPodcastResults
                  unliked={this.state.unliked}
                  liked={this.state.liked}
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
