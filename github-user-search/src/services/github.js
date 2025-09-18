const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });
  return response.json();
}
