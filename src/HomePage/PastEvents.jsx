import EventCard from "./EventCard";
import Poster1 from "../assets/CrypticCartelPoster.jpeg";
import Poster2 from "../assets/DeloittePoster.png";
import Poster3 from "../assets/GiveAndGlowPoster.jpeg";
import Poster4 from "../assets/DejaVuPoster.jpeg";
import Poster5 from "../assets/ResearchathonPoster.jpeg";
import "./PastEvents.css";

const PastEvents = () => {
  return (
    <>
      <h1 className="HomeTitle">Past Events</h1>
      <EventCard Name="Cryptic Cartel" Poster1={Poster1} Poster2={Poster1} Poster3={Poster1} Content="Unraveling the Enigma of Cryptic Cartel!<br/>🔐 Inspired by the enigmatic puzzles of Cicada 3301, our past event, Cryptic Cartel, transported participants on a thrilling journey. With nothing but their devices, they embarked on a quest to decipher cryptic riddles, leading to the revelation of a hidden answer on our website. It was a tech challenge like no other, where intellect and perseverance met innovation.<br/>The collective spirit of our participants shone brightly as they unraveled each layer of mystery, demonstrating remarkable problem-solving skills and teamwork. The final unveiling on our website marked the culmination of their tireless efforts.<br/>Cryptic Cartel was a testament to the unwavering passion for technology and cryptography that ANOVA Tech Club holds dear. It showcased the potential for exploration and learning within our tech community.<br/>As we celebrate the success of Cryptic Cartel, we eagerly anticipate the future. ANOVA Tech Club remains committed to offering more exciting adventures, puzzles, and opportunities for all tech enthusiasts. Your active participation, enthusiasm, and inquisitive minds will continue to shape the path ahead.<br/>Stay tuned for more thrilling adventures as we journey forward together, embracing the mysteries of the tech world.<br/>#CrypticCartel #TechMystery #ANOVAAdventure #TechEnthusiasts" />
      <EventCard Name="Industry talks with Deloitte" Poster1={Poster2} Poster2={Poster2} Poster3={Poster2} Content={"'Industry Talks with Deloitte' at TMA PAI - A Night of Tech Innovation and Insights!<br/>Get ready to mark your calendars for November 3, 2023, because ANOVA Tech Club, in collaboration with the Placement Cell, is hosting an event like no other. We are thrilled to announce 'Industry Talks with Deloitte' an exclusive evening of inspiration, innovation, and insightful conversations with tech industry leaders.<br/>🎤 Meet Our Distinguished Speakers:<br/>1. **Dr. Sandeep Kumar Sharma - Chief Information Officer (CIO) of Deloitte:** With a wealth of experience in technology and leadership, Dr. Sharma has led technological transformations and innovation at Deloitte. He will share his vision for the future of tech and provide invaluable career advice for aspiring tech professionals.<br/>2. **Mr. Chandra Narra - Managing Director of Deloitte:** As the Managing Director of Deloitte, Mr. Narra is at the forefront of the business and technology landscape. He will discuss the dynamic relationship between technology and business and provide insights into the tech-driven strategies that power Deloitte's success.<br/>🏛️ **Venue:** The event will take place at TMA PAI, providing a comfortable and inspiring environment for you to engage with our esteemed guests.<br/>'Industry Talks with Deloitte' promises an evening of thought-provoking discussions on the latest trends, challenges, and opportunities in the tech industry. This is a golden opportunity to gain knowledge and inspiration directly from industry leaders who have shaped the future of technology.<br/>Stay tuned for more details, including the event schedule and registration information. We can't wait to see you there and embark on this exciting tech journey together.<br/>#TechTalks #DeloitteLeaders #ANOVAEvent #TMAPAIVenue #TechInnovation"} />
      <EventCard Name="Give and Glow" Poster1={Poster3} Poster2={Poster3} Poster3={Poster3} Content="Unleash the Light: Anova x HOMJ 'Give & Glow' Donation Drive !!!<br/>It's time to declutter for a cause !!!<br/>Search your rooms for unused treasures—clothes, books, shoes—and turn them into smiles. Your unwanted items can find a new purpose, bringing joy to those in need and bring a radiant smile to their faces 😄" />
      <EventCard Name="Déjà-vu" Poster1={Poster4} Poster2={Poster4} Poster3={Poster4} Content="Rewind and remix! Remember 'Cryptic Cartel'? 💫The mind-bending puzzles, the teamwork triumphs...we're bringing it back with a twist!<br/>Whether you're a seasoned puzzle enthusiast or someone seeking a new and exciting challenge we invite you to an incredible voyage - the 'Déjà-Vu', an exceptional Scavenger Hunt! Level up your problem-solving and flex your skills.🖥🖥<br/>Get ready to 🕵‍♂ decode cryptic clues, 💻 solve intricate tech-related puzzles, and 🕵‍♀ unravel hidden secrets as you immerse yourself in an unforgettable endevour!" />
      <EventCard Name="Research-a-thon" Poster1={Poster5} Poster2={Poster5} Poster3={Poster5} Content="Welcome to our Research-a-thon! 🔍 🚀<br/>Join us for an exhilarating research hackathon where you'll craft your very own research paper from scratch.<br/>Benefits for you:<br/>1.⁠ ⁠Prize Pool of 15k<br/>2.⁠ ⁠Discussion room with multiple available mentors<br/>3.⁠ ⁠May be counted towards CWS*<br/>*Depends on your mentor, and if they accept the proposal<br/>Indulge in refreshments, network, and benefit from daily talks and mentor support.<br/>Everyone can participate, Bachelor's, Master's, or PhD students, from any department. Join solo or team up with two members.<br/>Join us as we embark on this adventure together. Your curiosity is the compass, and your imagination is the map. Let's chart a course for discovery at the 'Research-a-thon! 🚀'" />
    </>
  );
};

export default PastEvents;
