import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Overview from "./Overview";
import Execs from "./Execs";
import PastEvents from "./PastEvents";
import UpcomingEvents from "./UpcomingEvents";
import Footer from "./Footer";
import "./HomePage.css";
import Parallax from "./Parallax";
import BackgroundStars from "./BackgroundStars";

function HomePage() {
  {Parallax()}
  {BackgroundStars()}

  return (
    <>
      <Navbar />
      <div id="HeroSection">
        <HeroSection />
      </div>
      <div className="HomePageContainer">
        <div className="HomePageBgLayer HomePageBgLayer1" data-scroll-speed="10"></div>
        <div className="HomePageBgLayer HomePageBgLayer2" data-scroll-speed="9"></div>
        <div className="HomePageBgLayer HomePageBgLayer3" data-scroll-speed="7"></div>
        <div className="HomePageBgLayer HomePageBgLayer4" data-scroll-speed="6"></div>
        <div className="HomePageBgLayer HomePageBgLayer5" data-scroll-speed="5"></div>
        {loadParallax()}
        {loadStars()}
        <div className="HomePageContent">
          <div id="Overview">
            <Overview />
          </div>
          <div id="Execs">
            <Execs />
          </div>
          <div id="PastEvents">
            <PastEvents />
          </div>
          <div id="UpcomingEvents">
            <UpcomingEvents />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
