import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";

import "./SearchPodcastForm.css";

class SearchPodcastForm extends Component {
  constructor() {
    super();
    this.searchForPodcast = this.searchForPodcast.bind(this);
  }

  searchForPodcast(event) {
    event.preventDefault();
    const encodedPodcastTitle = encodeURIComponent(this.input.value);
    axios
      .get(
        `https://itunes.apple.com/search?term=${encodedPodcastTitle}&kind=podcast`
      )
      .then(response => {
        const { addPodcast } = this.props;
        response.data.results.map(podcast => addPodcast(podcast));
        this.props.history.push(`search/${encodedPodcastTitle}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <form className="podcast-search" onSubmit={e => this.searchForPodcast(e)}>
        <FormGroup>
          <ControlLabel>Search for podcast</ControlLabel>
          <FormControl
            type="search"
            placeholder="Type name of podcast"
            inputRef={ref => {
              this.input = ref;
            }}
          />
          <Button type="submit" bsStyle="primary">Search</Button>
        </FormGroup>
      </form>
    );
  }
}

SearchPodcastForm.propTypes = {
  addPodcast: PropTypes.func.isRequired
};

export default SearchPodcastForm;
