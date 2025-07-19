import ProfilePage from '../../alx-react-app-props/src/ProfilePage';
import UserContext from '../../alx-react-app-props/src/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
  );
}

export default App;