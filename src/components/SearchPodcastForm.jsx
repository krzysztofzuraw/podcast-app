import React, { Component } from 'react';
import axios from 'axios';

class SearchPodcastForm extends Component {

  searchForPodcast (event) {
    event.preventDefault();
    const podcastTitle = this.refs.title.value;
    axios.get(`https://gpodder.net/search.json?q=${encodeURIComponent(podcastTitle)}`)
      .then((response) => {
        response.data.map(podcast => this.props.addPodcast(podcast));
      })
      .catch((error) => {
        console.log(error);
      });

  }

  render () {
    return (
      <form className='podcast-search' onSubmit={(e) => this.searchForPodcast(e)}>
        <input ref='title' type='text' placeholder='Type name of podcast' />
        <button type='submit'>Search</button>
      </form>
    )
  }
}

export default SearchPodcastForm;
