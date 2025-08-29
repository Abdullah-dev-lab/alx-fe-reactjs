import axios from "axios";

const BASE_URL = "https://api.github.com/users";

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
