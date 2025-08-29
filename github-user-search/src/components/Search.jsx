import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [form, setForm] = useState({
    username: "",
    location: "",
    minRepos: "",
    minFollowers: "",
  });
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async (reset = true) => {
    try {
      setLoading(true);
      setError("");
      const { users, totalCount } = await searchUsers({
        ...form,
        page: reset ? 1 : page,
        perPage: 10,
      });
      setTotalCount(totalCount);
      if (reset) {
        setResults(users);
        setPage(2);
      } else {
        setResults((prev) => [...prev, ...users]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(true);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-3 items-center bg-white p-4 rounded-xl shadow-md"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min Repos"
          value={form.minRepos}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-28"
        />
        <input
          type="number"
          name="minFollowers"
          placeholder="Min Followers"
          value={form.minFollowers}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-32"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <ul className="mt-6 space-y-4">
        {results.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600"
              >
                {user.login}
              </a>
              <p className="text-sm text-gray-600">
                Score: {user.score.toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Load More */}
      {results.length < totalCount && !loading && (
        <button
          onClick={() => handleSearch(false)}
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Load More
        </button>
      )}

      {loading && <p className="mt-4">Loading...</p>}
    </div>
  );
}

export default Search;
