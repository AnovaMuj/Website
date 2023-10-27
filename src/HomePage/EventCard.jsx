import "./EventCard.css";

const EventCard = ({ Name, Poster1, Poster2, Poster3, Content }) => {
  return (
    <div className="EventFrame">
      <h3 className="EventTitle">
        <u>{Name}</u>
      </h3>
      <div className="EventPosterFrame">
        <img className="EventPoster" src={Poster1} alt="EventPoster" />
        <img className="EventPoster" src={Poster2} alt="EventPoster" />
        <img className="EventPoster" src={Poster3} alt="EventPoster" />
      </div>
      <div className="EventContent">
        {Content.split("<br/>").map((line) => (
          <>
            <p>{line}</p>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
