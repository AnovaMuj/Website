import "./HeroSection.css";

function HeroSection() {
  function loadParticles() {
    const scriptTag = document.createElement("script");
    scriptTag.src = "/src/HomePage/particle-image.min.js";
    scriptTag.setAttribute("defer", "defer");
    document.body.appendChild(scriptTag);
  }

  return (
    <div className="HeroContainer">
      <div id="particle-image" data-params-src="/src/HomePage/params.json"></div>
      {loadParticles()}
    </div>
  );
}

export default HeroSection;
