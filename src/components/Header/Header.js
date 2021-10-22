import React from "react";

const Header = () => {
  setTimeout(() => {
    let t = document.querySelector(".typewriter");
    let p = document.createElement("h1");
    p.textContent = "Okay I'm done now ...";
    t.appendChild(p);
    t.removeChild(t.firstChild);
    setTimeout(() => {
      let q = document.createElement("h1");
      q.textContent = "alright click here";
      t.appendChild(q);
      t.removeChild(t.firstChild);
    }, 5500);
  }, 5500);

  return (
    <>
      <div className="typewriter">
        <h1>Just wait I'm building ...</h1>
      </div>
      <div className="aylana"></div>
    </>
  );
};

export default Header;
