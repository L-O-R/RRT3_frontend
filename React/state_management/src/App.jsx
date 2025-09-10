import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ChildComponent from "./components/ChildComponent";
import { AuthProvider } from "./store/AuthStore";
import LoginButton from "./components/LoginComponent";
import {
  ThemeProvider,
  useTheme,
} from "./store/ThemeStore";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(toggleTheme);
  return (
    // <AuthProvider>
    //   <div>
    //     <LoginButton />
    //   </div>
    // </AuthProvider>
    <>
      <div>{theme}</div>
      <button onClick={() => toggleTheme()}>
        CLick to change theme
      </button>
    </>
  );
};

export default App;
