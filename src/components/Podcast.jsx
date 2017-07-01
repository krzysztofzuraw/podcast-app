import React, { Component } from "react";

export default class Podcast extends Component {
  render() {
    const { id, details, likePodcast } = this.props;
    return (
      <div key={id}>
        <h2>{details.artistName}</h2>
        <img src={details.artworkUrl100} alt={details.artistName} />
        <p>{details.artistViewUrl}</p>
        <button onClick={() => likePodcast(id)}>Like it!</button>
      </div>
    );
  }
}
