import { axiosInstance } from "./axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

//GET MOOD & GENRES
export const getMoodAndGenres = async () => {
  try {
    const res = await axiosInstance.get(`/explore/meta`);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET NEW MUSIC VIDEO
export const getNewMusicVideo = async () => {
  try {
    const res = await axiosInstance.get(`/explore/videos`);
    // console.log(res);
    const data = await res.data;
    return data;
  } catch {
    alert(err);
  }
};

//GET NEW RELEASES
export const getNewRelease = async () => {
  try {
    const res = await axiosInstance.get(`/explore/new-releases`);
    const data = await res.data;
    console.log(data);
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET COUNTRY
export const getCountry = async () => {
  try {
    const res = await axiosInstance.get(`/charts/countries`);
    const data = res.data;
    // console.log(data);
    return data;
  } catch (err) {
    alert(err);
  }
};
getCountry();

//GET VIDEO CHARTS
export const getVidCharts = async (country) => {
  try {
    const res = await axiosInstance.get(`/charts/videos?country=${country}`);
    // console.log(res);
    const data = res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET ARTISTS
export const getArtists = async (country) => {
  try {
    const res = await axiosInstance.get(
      `/charts/top-artists?country=${country}`
    );
    // console.log(res);
    const data = res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET CATEGORIES AND LINES
export const getCate = async () => {
  try {
    const res = await axiosInstance.get(`/categories`);
    const data = await res.data;
    // console.log(res);
    return data;
  } catch (err) {
    alert(err);
  }
};

export const getLine = async () => {
  try {
    const res = await axiosInstance.get(`/lines`);
    const data = await res.data;
    // console.log(res);
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET CATEGORIES SLUG AND LINES SLUG
export const getSlug = async (slug) => {
  try {
    const res = await axiosInstance.get(`${slug}`);
    const data = res.data;
    // console.log(data.subcategories);
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET LINES SONGS / PLAYLISTS / ALBUMS / VIDEOS
export const getLinesSongs = async (slug) => {
  try {
    const res = await axiosInstance.get(`${slug}/songs`);
    // console.log(res);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};
export const getLinesPlaylists = async (slug) => {
  try {
    const res = await axiosInstance.get(`${slug}/playlists`);
    // console.log(res);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};
export const getLinesAlbums = async (slug) => {
  try {
    const res = await axiosInstance.get(`${slug}/albums`);
    // console.log(res);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};
export const getLinesVideos = async (slug) => {
  try {
    const res = await axiosInstance.get(`${slug}/videos`);
    // console.log(res);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};

//HOME PAGE
//GET MOOD
export const getMood = async () => {
  try {
    const res = await axiosInstance.get(`/moods`);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET QUICK PICK
export const getQuickPick = async () => {
  try {
    const res = await axiosInstance.get(`/quick-picks`);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET ALBUM FOR YOU
export const getAlbumForYou = async () => {
  try {
    const res = await axiosInstance.get(`/home/albums-for-you`);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET TODAY HIT
export const getTodayHits = async () => {
  try {
    const res = await axiosInstance.get(`/home/todays-hits`);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};

//GET SONG
export const getSongDetail = async (id) => {
  try {
    const res = await axiosInstance.get(`/songs/details/${id}`);
    const data = res.data;
    return data;
  } catch {
    return null;
  }
};

//GET VIDEO
export const getVideoDetail = async (id) => {
  try {
    const res = await axiosInstance.get(`/videos/details/${id}`);
    const data = res.data;
    return data;
  } catch {
    return null;
  }
};

//GET ALBUM
export const getAlbumDetail = async (slug) => {
  try {
    const res = await axiosInstance.get(`/albums/details/${slug}`);
    const data = res.data;
    return data;
  } catch {
    return null;
  }
};

//GET PLAYLIST
export const getPlaylistDetail = async (slug) => {
  try {
    const res = await axiosInstance.get(`/playlists/details/${slug}`);
    const data = res.data;
    return data;
  } catch {
    return null;
  }
};
