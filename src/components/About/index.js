import React from "react";
import "./index.scss";

function About() {

  function alTest() {
    alert("JOEY: how you doin?");
    // console.log("sdad");
  }

  return (
    <>
      <h1>About</h1>
      <button onClick={alTest}>Say "hi" to Joey</button>
    </>
  );
}

export default About;