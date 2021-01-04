const API = 'http://api.tvmaze.com/shows/';

export const fetchDetails = async showId => {
  try {
    const response = await fetch(`${API}${showId}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchShowEpisodes = async showId => {
  try {
    const response = await fetch(`${API}${showId}/episodes`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchEpisodeDetails = async (showId, season, number) => {
  try {
    const response = await fetch(`${API}${showId}/episodebynumber?season=${season}&number=${number}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
