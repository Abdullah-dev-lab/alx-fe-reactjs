const useAuth = () => {
  const isLoggedIn = localStorage.getItem('auth') === 'true';
  return { isAuthenticated: isLoggedIn };
};

export default useAuth;
