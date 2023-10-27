import ExecCards from "./ExecCards";
import { ExecDetails } from "./ExecDetails";
import "./Execs.css";

const Execs = () => {
  return (
    <>
      <h1 className="HomeTitle">Execs</h1>
      <div className="ExecContainer">
        {ExecDetails.map((Exec, Index) => (
          <ExecCards Picture={Exec.Picture} Name={Exec.Name} About={Exec.About} Insta={Exec.Insta} Mail={Exec.Mail} Contact={Exec.Contact} key={Index} />
        ))}
      </div>
    </>
  );
};

export default Execs;
