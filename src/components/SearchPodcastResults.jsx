import React, { Component } from "react";
import { Grid, Row, Col, Panel } from "react-bootstrap";
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
        details={this.props.liked[key]}
        liked={true}
        unlikePodcast={this.props.unlikePodcast}
      />
    );
  }

  render() {
    const unlikedPodcastIds = Object.keys(this.props.unliked || {});
    const likedPodcastIds = Object.keys(this.props.liked || {});
    return (
      <Grid>
        <Row>
          <Col xs={6} md={6} lg={6}>
            <Panel header={<h3>Search Results</h3>} bsStyle="primary">
              <div className="podcastResults">
                {unlikedPodcastIds.map(key =>
                  <Podcast
                    key={key}
                    id={key}
                    details={this.props.unliked[key]}
                    liked={false}
                    likePodcast={this.props.likePodcast}
                  />
                )}
              </div>
            </Panel>
          </Col>
          <Col xs={6} md={6} lg={6}>
            <Panel header={<h3>Your liked podcasts</h3>} bsStyle="success">
              <div className="liked">
                {likedPodcastIds.map(key => this.renderLiked(key))}
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SearchPodcastResults;
