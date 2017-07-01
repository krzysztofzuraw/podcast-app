import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class SearchPodcastForm extends Component {
  searchForPodcast(event) {
    event.preventDefault();
    const encodedPodcastTitle = encodeURIComponent(this.refs.title.value);
    axios
      .get(
        `https://itunes.apple.com/search?term=${encodedPodcastTitle}&kind=podcast`
      )
      .then(response => {
        response.data.results.map(podcast => this.props.addPodcast(podcast));
        this.props.history.push(`search/${encodedPodcastTitle}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <form className="podcast-search" onSubmit={e => this.searchForPodcast(e)}>
        <label htmlFor="title">Search for podcast</label>
        <input ref="title" type="text" placeholder="Type name of podcast" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchPodcastForm.propTypes = {
  addPodcast: PropTypes.func.isRequired
};

export default SearchPodcastForm;
