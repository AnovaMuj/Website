import "./HeroSection.css";

function HeroSection() {
  function loadParticles() {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://cdn.jsdelivr.net/gh/AnovaMuj/Website/src/HomePage/particle-image.min.js";
    scriptTag.setAttribute("defer", "defer");
    document.body.appendChild(scriptTag);
  }

  return (
    <div className="HeroContainer">
      <div id="particle-image" data-params-src="https://cdn.jsdelivr.net/gh/AnovaMuj/Website/src/HomePage/param.json"></div>
      {loadParticles()}
    </div>
  );
}

export default HeroSection;
