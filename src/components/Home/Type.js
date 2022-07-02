import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BlockChain Developer",
          "Full Stack Engineer",
          "MERN Stack Developer",
          "Front End Developer",
          "Back End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
