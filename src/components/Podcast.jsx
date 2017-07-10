import React, { Component } from "react";

export default class Podcast extends Component {
  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(id, podcastDetails) {
    const { likePodcast, unlikePodcast } = this.props;
    if (podcastDetails.liked === true) {
      return <button onClick={() => unlikePodcast(id)}>UnLike It!</button>;
    } else {
      return <button onClick={() => likePodcast(id)}>Like it!</button>;
    }
  }

  render() {
    const { id, details } = this.props;
    return (
      <div key={id}>
        <h2>{details.artistName}</h2>
        <img src={details.artworkUrl100} alt={details.artistName} />
        <p>{details.artistViewUrl}</p>
        {this.renderButton(id, details)}
      </div>
    );
  }
}
