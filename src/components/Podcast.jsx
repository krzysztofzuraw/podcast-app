import React, { Component } from "react";
import { Thumbnail, Button } from "react-bootstrap";

import "./Podcast.css";

export default class Podcast extends Component {
  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(id, podcastDetails) {
    const { likePodcast, unlikePodcast } = this.props;
    if (podcastDetails.liked === true) {
      return (
        <Button
          onClick={() => unlikePodcast(id)}
          bsStyle="danger"
          className="action-btn"
        >
          Unlike it!
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => likePodcast(id)}
          bsStyle="success"
          className="action-btn"
        >
          Like it!
        </Button>
      );
    }
  }

  render() {
    const { id, details } = this.props;
    return (
      <Thumbnail
        src={details.artworkUrl100}
        alt={details.artistName}
        className="podcast-detail"
      >
        <div key={id}>
          <h2>{details.artistName}</h2>
          <p>Country: {details.country}</p>
          <p>Genre: {details.primaryGenreName}</p>
          <p>Latest episode: {details.trackName}</p>
          <div className="podcast-btn">
            <Button className="feed-btn">
              <a href={details.feedUrl}>Feed URL</a>
            </Button>
            <Button className="itunes-btn">
              <a href={details.artistViewUrl}>iTunes Link</a>
            </Button>
            {this.renderButton(id, details)}
          </div>
        </div>
      </Thumbnail>
    );
  }
}
