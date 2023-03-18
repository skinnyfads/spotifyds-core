import axios from "axios";

async function getAccessToken(spotifyUrl: string) {
  const currentTimestamp = Date.now();
  const lastExpTimestamp = getAccessToken.lastExpTimestamp;

  if (getAccessToken.lastToken && currentTimestamp < lastExpTimestamp) {
    return getAccessToken.lastToken;
  }
  const response = await axios.get<string>(spotifyUrl);
  const accessTokenPattern = /accessToken":"(.*?)(?=")/;
  const expTimestampPattern = /accessTokenExpirationTimestampMs":(.*?)(?=,)/;
  const accessToken = accessTokenPattern.exec(response.data)![1];
  const expTimestamp = Number(expTimestampPattern.exec(response.data)![1]);

  getAccessToken.lastExpTimestamp = expTimestamp;
  getAccessToken.lastToken = accessToken;

  return accessToken;
}
getAccessToken.lastToken = "";
getAccessToken.lastExpTimestamp = Date.now();

export default getAccessToken;
