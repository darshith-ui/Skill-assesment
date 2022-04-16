import "./App.css";
import Universities from "./components/Universities.js";
import Button from "./components/Button";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [universities, getUniversities] = useState([]);
  const handleLoad = () => {
    axios
      .get(`http://universities.hipolabs.com/search?country=Australia`)
      .then((res) => {
        const universities = res.data;
        getUniversities(universities);
      });
  };
  const handleDelete = () => {
    getUniversities((prevState) => prevState.slice(0, -1));
  };
  const handleAdd = () => {
    getUniversities((prevState) => [...prevState, prevState[0]]);
  };
  return (
    <div className="App">
      {[
        { fname: handleLoad, value: "Load" },
        { fname: handleDelete, value: "Delete" },
        { fname: handleAdd, value: "Add" },
      ].map((buttonProperties, index) => {
        return (
          <Button
            key={index}
            handle={buttonProperties.fname}
            buttonName={buttonProperties.value}
          />
        );
      })}
      <Universities universities={universities} />
    </div>
  );
};

export default App;
