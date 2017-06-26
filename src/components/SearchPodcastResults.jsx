import React, { Component } from "react";

class SearchPodcastResults extends Component {
  constructor() {
    super();

    this.renderResults = this.renderResults.bind(this);
  }
  renderResults(key) {
    const podcast = this.props.podcasts[key];
    return (
      <div key={key}>
        <h2>{podcast.title}</h2><p>{podcast.description}</p>
        <img src={podcast.scaled_logo_url} alt={podcast.title} />
        <p>{podcast.url}</p>
      </div>
    );
  }

  render() {
    return (
      <div>{Object.keys(this.props.podcasts).map(this.renderResults)}</div>
    );
  }
}

export default SearchPodcastResults;
