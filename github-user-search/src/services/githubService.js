import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com";


export async function fetchUserData(query) {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
      {
        headers: {
          Authorization: `token ${GITHUB_API_KEY}`,
        },
      }
    );
    return response.data.items; // return an array of users
  } catch (error) {
    console.error("GitHub Search API Error:", error.message);
    throw error;
  }
}
// Axios instance with auth header
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`,
  },
});

// Search users (with pagination)
export async function searchUsers(query, page = 1, perPage = 6) {
  try {
    const response = await api.get(`/search/users?q=${query}&page=${page}&per_page=${perPage}`);
    return response.data; // returns { total_count, incomplete_results, items }
  } catch (error) {
    console.error("GitHub Search API Error:", error.message);
    throw error;
  }
}

// Fetch detailed info about a user
export async function fetchUserDetails(username) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data; // includes location, public_repos, followers, etc.
  } catch (error) {
    console.error("GitHub User API Error:", error.message);
    throw error;
  }
}
