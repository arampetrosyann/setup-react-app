import React, { useState, useCallback } from "react";
import "./styles/App.css";
import AppForm from "./components/AppForm";

const App = () => {
  const [result, setResult] = useState("");

  const onSubmit = useCallback(({ value }) => {
    setResult(value);
  }, []);

  return (
    <div className="app">
      <AppForm onSubmit={onSubmit} />
      {result && <p className="text">{result}</p>}
    </div>
  );
};

export default App;
