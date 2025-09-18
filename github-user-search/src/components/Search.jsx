import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  // State for the input value
  const [username, setUsername] = useState("");

  // State for API response data
  const [userData, setUserData] = useState(null);

  // State for loading and error handling
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    if (!username.trim()) return; // ignore empty input

    // Reset states before making API call
    setLoading(true);
    setError("");
    setUserData(null);

    // try {
    //   // Make request to GitHub API
    //   const response = await fetch(`https://api.github.com/users/${username}`);

    //   // If response is not successful (e.g. 404), throw error
    //   if (!response.ok) {
    //     throw new Error("User not found");
    //   }

    //   // Parse JSON response
    //   const data = await response.json();

    //   // Save user data in state
    //   setUserData(data);
    // } catch (err) {
    //   // If request fails (network error, 404, etc.)
    //   console.error(err.message);
    //   setError("Looks like we can’t find the user");
    // } finally {
    //   // Always stop loading state (whether success or error)
    //   setLoading(false);
    // }

    try {
      // 👇 directly uses the full GitHub API URL in the service
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      console.logerror(err.message);
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false);
    }

    // Clear input field after search
    setUsername("");
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#24292f",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>} {/* Show while waiting for API */}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show if error */}
      {userData && ( /* Show user details if success */
        <div style={{ marginTop: "20px" }}>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h3>{userData.name || userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
