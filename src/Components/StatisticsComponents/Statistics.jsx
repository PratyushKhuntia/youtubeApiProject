import React, { Component } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = { onStatistics: [] };
  }
  componentDidMount() {
    var statisticsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${this.props.video.id.videoId}&key=AIzaSyCrp4aR3oNJ1a8PJP8G-FDkUThSDO-Qb2A`;
    axios.get(statisticsUrl).then((x) =>
      this.setState({
        onStatistics: x.data.items[0].statistics
      })
    );
  }
  render() {
    if (!this.props.statistics) {
      return (
        <div className="statistics_Block">
          <div className="count">
            <NumberFormat
              value={this.state.onStatistics.viewCount + " views"}
              displayType={"text"}
              thousandSeparator={true}
              suffix={" views"}
              renderText={(value) => <div>{value}</div>}
            />
          </div>
          <div className="likesBlock">
            <div className="likes">
              <i className="thumbs up icon"></i>
              {this.state.onStatistics.likeCount}
            </div>
            <div className="dislikes">
              <i className="thumbs down icon"></i>
              {this.state.onStatistics.dislikeCount}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="statistics_Block">
          <div className="count">
            <NumberFormat
              value={this.props.statistics.viewCount + " views"}
              displayType={"text"}
              thousandSeparator={true}
              suffix={" views"}
              renderText={(value) => <div>{value}</div>}
            />
          </div>
          <div className="likesBlock">
            <div className="likes">
              <i className="thumbs up icon"></i>
              {this.props.statistics.likeCount}
            </div>
            <div className="dislikes">
              <i className="thumbs down icon"></i>
              {this.props.statistics.dislikeCount}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Statistics;
