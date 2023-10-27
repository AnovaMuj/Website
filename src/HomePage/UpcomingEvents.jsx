import EventCard from "./EventCard";
import Poster1 from "../assets/DeloittePoster.jpg";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  return (
    <>
      <h1 className="HomeTitle">Upcoming Events</h1>
      <EventCard Name="Industry talks with Deloitte" Poster1={Poster1} Poster2={Poster1} Poster3={Poster1} Content={"'Industry Talks with Deloitte' at TMA PAI - A Night of Tech Innovation and Insights!<br/>Get ready to mark your calendars for November 3, 2023, because ANOVA Tech Club, in collaboration with the Placement Cell, is hosting an event like no other. We are thrilled to announce 'Industry Talks with Deloitte' an exclusive evening of inspiration, innovation, and insightful conversations with tech industry leaders.<br/>🎤 Meet Our Distinguished Speakers:<br/>1. **Dr. Sandeep Kumar Sharma - Chief Information Officer (CIO) of Deloitte:** With a wealth of experience in technology and leadership, Dr. Sharma has led technological transformations and innovation at Deloitte. He will share his vision for the future of tech and provide invaluable career advice for aspiring tech professionals.<br/>2. **Mr. Chandra Narra - Managing Director of Deloitte:** As the Managing Director of Deloitte, Mr. Narra is at the forefront of the business and technology landscape. He will discuss the dynamic relationship between technology and business and provide insights into the tech-driven strategies that power Deloitte's success.<br/>🏛️ **Venue:** The event will take place at TMA PAI, providing a comfortable and inspiring environment for you to engage with our esteemed guests.<br/>'Industry Talks with Deloitte' promises an evening of thought-provoking discussions on the latest trends, challenges, and opportunities in the tech industry. This is a golden opportunity to gain knowledge and inspiration directly from industry leaders who have shaped the future of technology.<br/>Stay tuned for more details, including the event schedule and registration information. We can't wait to see you there and embark on this exciting tech journey together.<br/>#TechTalks #DeloitteLeaders #ANOVAEvent #TMAPAIVenue #TechInnovation"} />
    </>
  );
};

export default UpcomingEvents;
