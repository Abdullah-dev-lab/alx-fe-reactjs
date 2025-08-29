import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const SEARCH_URL = "https://api.github.com/search/users";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);

    throw new Error(
      error.response?.status === 404
        ? "User not found"
        : "Failed to fetch user data"
    );
  }
}

export async function searchUsers({ username, location, minRepos, minFollowers,  page = 1, perPage = 10 }) {
  try {
    let query = "";

    if (username) query += `${username}+`;
    if (location) query += `location:${location}+`;
    if (minRepos) query += `repos:>=${minRepos}+`;
    if (minFollowers) query += `followers:>=${minFollowers}+`;

    query = query.replace(/\+$/, "");

    const response = await axios.get(`${SEARCH_URL}?q=${query}&page=${page}&per_page=${perPage}`);
    return {
      users: response.data.items,
      totalCount: response.data.total_count,
    };
  } catch (error) {
    console.error("Error searching users:", error);
    throw new Error("Failed to perform user search");
  }
}
