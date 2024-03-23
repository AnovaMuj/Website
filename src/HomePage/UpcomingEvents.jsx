import EventCard from "./EventCard";
import Poster1 from "../assets/AnovaLogo.png";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  return (
    <>
      <h1 className="HomeTitle">Upcoming Events</h1>
      <EventCard Name="Apriori" Poster1={Poster1} Poster2={Poster1} Poster3={Poster1} Content={"ANOVA's Flagship Techno-Cultural Fest!"} />
    </>
  );
};

export default UpcomingEvents;
