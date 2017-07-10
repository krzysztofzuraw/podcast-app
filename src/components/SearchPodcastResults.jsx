import React, { Component } from "react";
import Podcast from "./Podcast";

class SearchPodcastResults extends Component {
  constructor() {
    super();
    this.renderLiked = this.renderLiked.bind(this);
  }

  renderLiked(key) {
    return (
      <Podcast
        key={key}
        id={key}
        details={this.props.podcasts[key]}
        unlikePodcast={this.props.unlikePodcast}
      />
    );
  }

  render() {
    const podcastIds = Object.keys(this.props.podcasts);
    return (
      <div>
        <div className="podcastResults">
          {podcastIds.map(key =>
            <Podcast
              key={key}
              id={key}
              details={this.props.podcasts[key]}
              likePodcast={this.props.likePodcast}
            />
          )}
        </div>
        <div className="liked">
          {podcastIds
            .filter(podcastId => {
              return this.props.podcasts[podcastId].liked === true;
            })
            .map(key => this.renderLiked(key))}
        </div>
      </div>
    );
  }
}

export default SearchPodcastResults;
