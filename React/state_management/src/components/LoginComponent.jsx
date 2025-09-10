// File: src/components/LoginButton.jsx

import { useAuth } from "../store/AuthStore";

function LoginButton() {
  console.log(useAuth());
  const { user, login, logout } = useAuth();

  return user ? (
    <button onClick={logout}>Log Out {user.name}</button>
  ) : (
    <button onClick={() => login("Alice")}>Log In</button>
  );
}

export default LoginButton;
