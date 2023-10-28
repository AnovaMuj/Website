import ExecCards from "./ExecCards";
import { ExecDetails } from "./ExecDetails";
import "./Execs.css";

const Execs = () => {
  return (
    <>
      <h1 className="HomeTitle">Executive Committee</h1>
      <div className="ExecContainer">
        {ExecDetails.map((Exec, Index) => (
          <ExecCards Picture={Exec.Picture} Name={Exec.Name} Post={Exec.Post} Quote={Exec.Quote} Insta={Exec.Insta} Mail={Exec.Mail} Contact={Exec.Contact} key={Index} />
        ))}
      </div>
    </>
  );
};

export default Execs;
