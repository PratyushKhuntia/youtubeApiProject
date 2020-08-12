import React, { Component, Fragment } from "react";
import youtubeApi, { baseParams } from "./Api/YoutubeApi.js";
import "./youtube.css";
import axios from "axios";
import HeaderComponent from "./Components/HeaderComponent/Header";
import VideoList from "./Components/VideosComponent/VideoList";
import VideoDetails from "./Components/VideosComponent/VideoDetails";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false,
      selectedVideo: null
    };
  }
  componentDidMount() {
    this.formSubmit("javascript");
  }
  formSubmit = async (term) => {
    let response = await youtubeApi.get("/search", {
      params: {
        q: term,
        ...baseParams
      }
    });
    this.setState({
      videos: response.data.items,
      loading: true,
      selectedVideo: response.data.items[0]
    });
  };
  onSelectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  onSelectedVideo = async (video) => {
    var statisticsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.id.videoId}&key=AIzaSyCrp4aR3oNJ1a8PJP8G-FDkUThSDO-Qb2A`;
    let statisticsData = await axios.get(statisticsUrl);
    this.setState({
      selectedVideo: video,
      onStatistics: statisticsData.data.items[0].statistics
    });
  };
  render() {
    return (
      <Fragment>
        <header>
          <HeaderComponent fromAppFormProps={this.formSubmit} />
        </header>

        <main className="container-fluid my-4 pl-4 pr-4 homePage">
          <section id="data-list">
            <article>
              <div className="player_block">
                <VideoDetails video={this.state.selectedVideo} />
              </div>

              <div className="list_block">
                <VideoList
                  videos={this.state.videos}
                  onSelectedVideo={this.onSelectedVideo}
                />
              </div>
            </article>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default App;
