import React from "react";
import styles from "./App.module.css";
import Simple from "./Simple";
const App = () => {
  return (
    <div className={styles.container}>
      Hello <Simple />
    </div>
  );
};

export default App;
