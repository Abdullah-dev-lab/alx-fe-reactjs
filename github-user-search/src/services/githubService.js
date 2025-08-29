const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = import.meta.env.VITE_APP_API_URL;

export async function fetchRepos(username) {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`, {
    headers: {
      Authorization: `token ${API_KEY}`, // Only if the API needs auth
    },
  });
  return response.json();
}
