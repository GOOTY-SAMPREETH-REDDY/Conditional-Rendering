import React from "react";
import Login from "../login.jsx";

var islogin = true;

function App() {
  return (
    <div className="container">{islogin ? <h1>hello</h1> : <Login />}</div>
  );
}
export default App;
