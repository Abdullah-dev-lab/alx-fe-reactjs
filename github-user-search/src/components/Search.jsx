import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === "") return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }

    setUsername("");
  };

  
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-ceter gap-2 p-4">
                <input 
                type="text" 
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded-xl px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-400"
                />
                <button 
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
                >
                    Search
                </button>
            </form>

             {/* Conditional Rendering */}
      {loading && <p className="text-gray-600">Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="mt-4 p-4 border rounded-xl bg-white shadow-md w-80 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-xl font-semibold mt-2">{user.name || user.login}</h2>
          <p className="text-gray-600">@{user.login}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            View GitHub Profile
          </a>
        </div>
      )}
        </div>    
    );
}

export default Search;