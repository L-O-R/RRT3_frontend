import React from "react";
import "./App.css";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./component/ContactUs";
import Services from "./component/Services";
import ClassComponent from "./component/ClassComponent";
import FunctionalComponent from "./component/FunctionalComponent";
const App = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Routes>
          <Route
            index
            element={<h1>THis is home page</h1>}
          />
          <Route
            path="/about-us"
            element={<h1>THis is about us page</h1>}
          />
          <Route
            path="/contact-us"
            element={<ContactUs />}
          />
          <Route path="/services" element={<Services />}>
            <Route index element={<h2>Service 1</h2>} />
            <Route
              path="/services/2"
              element={<h2>Service 2</h2>}
            />
          </Route>
        </Routes> */}

        {/* {visible && <ClassComponent />}
        
        */}
        {visible && <FunctionalComponent state={visible} />}
        <button onClick={() => setVisible(false)}>
          Set unmounting
        </button>
      </main>
    </div>
  );
};

export default App;
