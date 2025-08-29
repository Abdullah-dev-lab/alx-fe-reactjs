const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = import.meta.env.VITE_APP_API_URL;


async function fetchUserData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error(`User not found: ${username}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user data:", error.message);
        throw error;
    }
}