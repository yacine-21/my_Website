import React from "react";

function Loader() {
  setTimeout(() => {
    let div = document.querySelector(".typewriter");
    let secondPhrase = document.createElement("h1");
    secondPhrase.textContent = "Okay I'm done now ...";
    div.appendChild(secondPhrase);
    div.removeChild(div.firstChild);
    setTimeout(() => {
      let thirdPhrase = document.createElement("a");
      thirdPhrase.classList.add("my_link");
      thirdPhrase.textContent = "Alright click here";
      thirdPhrase.setAttribute("href", "/accueil");
      div.appendChild(thirdPhrase);
      div.removeChild(div.firstChild);
    }, 5500);
  }, 5500);

  return (
    <section className="typewriter">
      <div className="typewriter">
        <h1>Just wait I'm building ...</h1>
      </div>
      <div className="aylana"></div>
    </section>
  );
}

export default Loader;
