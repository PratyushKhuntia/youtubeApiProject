// AIzaSyCrp4aR3oNJ1a8PJP8G-FDkUThSDO-Qb2A
import axios from "axios";
let KEY = "AIzaSyCrp4aR3oNJ1a8PJP8G-FDkUThSDO-Qb2A";

export const baseParams = {
  part: "snippet",
  maxResults: 10,
  key: KEY
};
export const baseStatistics = {
  part: "statistics",
  id: "",
  key: KEY
};
let YoutubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {}
});
export default YoutubeApi;
