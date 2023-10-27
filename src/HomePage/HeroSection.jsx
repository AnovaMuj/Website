import "./HeroSection.css";

function HeroSection() {
  function loadParticles() {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://cdn.jsdelivr.net/gh/AnovaMuj/Website/src/HomePage/particle-img.min.js";
    scriptTag.setAttribute("defer", "defer");
    document.body.appendChild(scriptTag);
  }

  return (
    <div className="HeroContainer">
      <div id="particle-image" data-params-src="https://cdn.jsdelivr.net/gh/AnovaMuj/Website/src/HomePage/parame.json"></div>
      {loadParticles()}
    </div>
  );
}

export default HeroSection;
