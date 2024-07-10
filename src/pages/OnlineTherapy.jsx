import { Link } from "react-router-dom";

function OnlineTheraphy() {
  return (
    <div>
      <h3>which theraphy do you want</h3>
      <div className="flex gap-8">
        <p>
          <Link to="teens">teens</Link>
        </p>
        <p>
          <Link to="couples">couples</Link>
        </p>
        <p>
          <Link to="individuals">individual</Link>
        </p>
      </div>
    </div>
  );
}

export default OnlineTheraphy;
