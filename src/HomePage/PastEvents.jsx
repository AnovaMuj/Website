import EventCard from "./EventCard";
import Poster1 from "../assets/CrypticCartelPoster.jpeg";
import "./PastEvents.css";

const PastEvents = () => {
  return (
    <>
      <h1 className="HomeTitle">Past Events</h1>
      <EventCard Name="Cryptic Cartel" Poster1={Poster1} Poster2={Poster1} Poster3={Poster1} Content="Unraveling the Enigma of Cryptic Cartel!<br/>🔐 Inspired by the enigmatic puzzles of Cicada 3301, our past event, Cryptic Cartel, transported participants on a thrilling journey. With nothing but their devices, they embarked on a quest to decipher cryptic riddles, leading to the revelation of a hidden answer on our website. It was a tech challenge like no other, where intellect and perseverance met innovation.<br/>The collective spirit of our participants shone brightly as they unraveled each layer of mystery, demonstrating remarkable problem-solving skills and teamwork. The final unveiling on our website marked the culmination of their tireless efforts.<br/>Cryptic Cartel was a testament to the unwavering passion for technology and cryptography that ANOVA Tech Club holds dear. It showcased the potential for exploration and learning within our tech community.<br/>As we celebrate the success of Cryptic Cartel, we eagerly anticipate the future. ANOVA Tech Club remains committed to offering more exciting adventures, puzzles, and opportunities for all tech enthusiasts. Your active participation, enthusiasm, and inquisitive minds will continue to shape the path ahead.<br/>Stay tuned for more thrilling adventures as we journey forward together, embracing the mysteries of the tech world.<br/>#CrypticCartel #TechMystery #ANOVAAdventure #TechEnthusiasts" />
    </>
  );
};

export default PastEvents;
