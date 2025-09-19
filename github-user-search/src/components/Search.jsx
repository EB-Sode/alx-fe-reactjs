import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  // State for the input value
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);

  // State for loading and error handling
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    if (!username.trim() && !location.trim() && !minRepos){
      setError("Please enter atleast one search criteria")
    }

    // Reset states before making API call
    setLoading(true);
    setError("");

    try {
      // 👇 directly uses the full GitHub API URL in the service
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: 1,
        perpage: 6
      });

      setResults(data.items);
    } catch (err) {
      console.error(err.message);
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

   return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">GitHub User Search</h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4"
      >
        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-gray-700 font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-gray-700 font-medium">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="e.g. Nigeria"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Minimum Repos */}
        <div>
          <label htmlFor="minRepos" className="block text-gray-700 font-medium">
            Minimum Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-400 focus:outline-none"
        >
          Search
        </button>
      </form>

      {/* Loading / Error / Results */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {results.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow rounded-lg p-4 text-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <h2 className="text-lg font-semibold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Github Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
