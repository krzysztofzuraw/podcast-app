import React, { Component } from "react";
import Podcast from "./Podcast";

class SearchPodcastResults extends Component {
  constructor() {
    super();
    this.renderLiked = this.renderLiked.bind(this);
  }

  renderLiked() {
    debugger;
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
            .filter(podcast => {
              return podcast.liked === true;
            })
            .map(this.renderLiked)}
        </div>
      </div>
    );
  }
}

export default SearchPodcastResults;
