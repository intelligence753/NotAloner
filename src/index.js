import ReactDOM from "react-dom/client";
import React from "react";
import App from './App';

// ReactDom.createRoot(<App />,document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);