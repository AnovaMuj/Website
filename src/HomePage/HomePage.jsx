import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Overview from "./Overview";
import Execs from "./Execs";
import PastEvents from "./PastEvents";
import UpcomingEvents from "./UpcomingEvents";
import Footer from "./Footer";
import "./HomePage.css";

function HomePage() {
  $.fn.moveIt = function () {
  var $window = $(window);
  var instances = [];

  $(this).each(function () {
    instances.push(new moveItItem($(this)));
  });

  window.onscroll = function () {
    var scrollTop = $window.scrollTop();
    instances.forEach(function (inst) {
      inst.update(scrollTop);
    });
  };
};

var moveItItem = function (el) {
  this.el = $(el);
  this.speed = parseInt(this.el.attr("data-scroll-speed"));
};

moveItItem.prototype.update = function (scrollTop) {
  this.el.css("transform", "translateY(" + -(scrollTop / this.speed) + "px)");
};

$(function () {
  $("[data-scroll-speed]").moveIt();
});


  let sky = document.querySelector(".HomePageBgLayer1");

var body = document.body,
  html = document.documentElement;

var PageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
var PageWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

function createDiv(size) {
  let circle = document.createElement("div");
  circle.classList.add("Stars");

  let randRange5 = Math.floor(Math.random() * 5) + 1;
  circle.classList.add(`blink_${randRange5}`);

  let widthAndHeight = random(size, "px");
  circle.style.height = circle.style.width = widthAndHeight;

  circle.style.left = random(PageWidth, "px");
  circle.style.top = random(PageHeight, "px");

  sky.appendChild(circle);
}

function paintStars(stars, size) {
  while (sky.firstChild) {
    sky.removeChild(sky.firstChild);
  }
  for (let i = 0; i < stars; i++) {
    createDiv(size);
  }
}

function random(range, unit) {
  let randNum = Math.floor(Math.random() * range) + 1;
  return `${randNum}${unit}`;
}

paintStars(400, 5);


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
