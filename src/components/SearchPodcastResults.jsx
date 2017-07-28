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
        details={this.props.podcasts[key]}
        unlikePodcast={this.props.unlikePodcast}
      />
    );
  }

  render() {
    const podcastIds = Object.keys(this.props.podcasts);
    return (
      <Grid>
        <Row>
          <Col xs={8} md={8} lg={8}>
            <Panel header={<h3>Search Results</h3>} bsStyle="primary">
              <div className="podcastResults">
                {podcastIds
                  .filter(key => {
                    return this.props.podcasts[key].liked === false;
                  })
                  .map(key =>
                    <Podcast
                      key={key}
                      id={key}
                      details={this.props.podcasts[key]}
                      likePodcast={this.props.likePodcast}
                    />
                  )}
              </div>
            </Panel>
          </Col>
          <Col xs={4} md={4} lg={4}>
            <Panel header={<h3>Your liked podcasts</h3>} bsStyle="success">
              <div className="liked">
                {podcastIds
                  .filter(podcastId => {
                    return this.props.podcasts[podcastId].liked === true;
                  })
                  .map(key => this.renderLiked(key))}
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SearchPodcastResults;
