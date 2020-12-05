 
import axios from "axios";
let KEY = "AIzaSyDrKZPMEfFheZLtzYJtrtDe2umyn297RTY";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
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

// AIzaSyCrp4aR3oNJ1a8PJP8G-FDkUThSDO-Qb2A

// AIzaSyCiX-afZORVermmGqL5grYVhwbbYAt7-lY