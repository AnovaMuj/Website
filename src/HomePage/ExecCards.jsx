import "./ExecCards.css";

const ExecCards = ({ Picture, Name, About, Insta, Mail, Contact }) => {
  return (
    <div className="ExecCard">
      <button href={"mailto:" + Mail} className="ExecMail">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </button>
      <div className="ExecProfilePic">
        <img src={Picture} />
      </div>
      <div className="ExecCardBottom">
        <div className="ExecContent">
          <span className="ExecName">{Name}</span>
          <span className="ExecAboutMe">{About}</span>
        </div>
        <div className="ExecBottomBottom">
          <div className="ExecSocialLinksContainer">
            <a href={Insta}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.999" viewBox="0 0 16 15.999">
                <path id="Subtraction_4" data-name="Subtraction 4" d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" transform="translate(6 598)"></path>
              </svg>
            </a>
          </div>
          <h3 className="ExecCardName">{Name}</h3>
          <button href={Contact} className="ExecButton">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExecCards;
