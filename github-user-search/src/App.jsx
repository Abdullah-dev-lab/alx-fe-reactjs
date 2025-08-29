import { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [searchUser, setSearchUser] = useState(null);
  const [errror, setError] = useState(null);

  const handleSearch = async (username) => {
     try {
      setError(null);
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setUser(null);
      setError(err.message);
  }
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {user && (
        <div className="mt-6 p-4 border rounded-xl bg-white shadow-md w-80 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-xl font-semibold mt-2">{user.name || user.login}</h2>
          <p className="text-gray-600">@{user.login}</p>
          <p className="mt-2">{user.bio || "No bio available"}</p>
          <div className="flex justify-around mt-4 text-sm text-gray-700">
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
          </div>
    </div>
      )}
    </div>
  );
}

export default App;