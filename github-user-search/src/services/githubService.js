import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com";

// Axios instance with auth header
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`,
  },
});

// 🔹 Search users with advanced filters (location, repos, pagination)
export async function fetchUserData({ username = "", location = "", minRepos = 0, page = 1, perPage = 6 }) {
  try {
    let query = username || "";

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await api.get(`/search/users?q=${query}&page=${page}&per_page=${perPage}`);
    return response.data; // { total_count, incomplete_results, items }
  } catch (error) {
    console.error("GitHub Search API Error:", error.message);
    throw error;
  }
}

// 🔹 Fetch detailed info about a specific user
export async function fetchUserDetails(username) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data; // includes location, public_repos, followers, etc.
  } catch (error) {
    console.error("GitHub User API Error:", error.message);
    throw error;
  }
}
