import axios from "axios";

async function getAccessToken(spotifyUrl: string) {
  const response = await axios.get<string>(spotifyUrl);
  const pattern = /accessToken":"(.*?)(?=")/g;
  const accessToken = pattern.exec(response.data)![1];

  return accessToken;
}

export default getAccessToken;
