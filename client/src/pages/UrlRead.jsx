import { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UrlRead = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Fragment>
      <h1>URL Read Page</h1>
      <h3>ID: {id}</h3>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </Fragment>
  );
};

export default UrlRead;
