import { saveToken } from "../pages/login";
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

// AUTH REGISTER
export const authRegister = async (name, email, password, confirmPassword) => {
  try {
    const res = await axiosInstance.post("/auth/register", {
      name,
      email,
      password,
      confirmPassword,
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

// AUTH LOGIN
export const authLogin = async (email, password) => {
  try {
    const res = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    alert("Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại!");
    return null;
  }
};

// REMOVE TOKEN
const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
// LOG OUT
export const logout = async () => {
  removeToken();
  try {
    const accessToken = getAccessToken();
    const res = await axiosInstance.delete("/auth/logout", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
  window.location.href = "/";
};

// GET PROFILE
let refreshTokenPromise = null;
const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  return accessToken;
};
export const getProfile = async () => {
  try {
    const accessToken = getAccessToken();
    const res = await axiosInstance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    if (!refreshTokenPromise) {
      refreshTokenPromise = getNewToken();
    }
    const newToken = await refreshTokenPromise;
    if (newToken) {
      saveToken(newToken);
      getProfile();
    } else {
      logout();
    }
  }
};

// GET NEW TOKEN
const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refresh_token");
  return refreshToken;
};
export const getNewToken = async () => {
  try {
    const refreshToken = getRefreshToken();

    const res = await axiosInstance.post("/auth/refresh-token", {
      refreshToken: refreshToken,
    });
    return res.data;
  } catch (err) {
    // alert(err);
    console.log(err);
  }
};

// UPDATE INFO
export const updateInfo = async (name, email) => {
  try {
    const accessToken = getAccessToken();
    const res = await axiosInstance.patch(
      "/auth/me",
      {
        name,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(res.data);

    // RELOAD
    const status = res.data.message;
    if (status === "Update profile successfuly") {
      alert("Cập nhật thông tin thành công");
    }
    // location.reload();
    window.location.href = "/user-info";
    return res.data;
  } catch (err) {
    // console.log(err);
    alert("Cập nhật thông tin thất bại");
  }
};

// UPDATE PASSWORD
export const changePassword = async (
  oldPassword,
  password,
  confirmPassword
) => {
  try {
    const accessToken = getAccessToken();
    const res = await axiosInstance.patch(
      "/auth/change-password",
      {
        oldPassword,
        password,
        confirmPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    // console.log(res.data);

    // RELOAD;
    const status = res.data.message;
    if (status === "Change password successfuly") {
      alert("Thay đổi mật khẩu thành công");
    }
    window.location.href = "/user-info";

    return res.data;
  } catch (err) {
    // console.log(err);
    alert(
      "Thay đổi mật khẩu thất bại, vui lòng kiểm tra lại mật khẩu hiện tại hoặc mật khẩu mới!"
    );
  }
};

// GET SEARCH SUGGESTION
export const getSearchSuggestion = async (searchContent) => {
  try {
    const res = await axiosInstance.get(
      `/search/suggestions?q=${searchContent}`
    );
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
