import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// http://localhost:3333/LmRUEfTmnAbTkv8Fvjwvg

const Home = () => {
  const navigate = useNavigate();
  const [customUrl, setCustomUrl] = useState("")

  const fecthUrlById = async () => {
    try {
      if (!customUrl || !customUrl.startsWith("http://localhost:3333")) {
        alert("Please enter valid URL")
        return;
      }
      const res = (
        await axios.get(customUrl)
      ).data;
      if (res) {
        navigate("/url/LmRUEfTmnAbTkv8Fvjwvg", {
          replace: true,
        });
      }
    } catch (error) {
      console.log("fecthUrlById error: ", error);
    }
  };

  return (
    <Fragment>
      <h1>URL Shortener App</h1>
      <code>Example: http://localhost:3333/LmRUEfTmnAbTkv8Fvjwvg</code>
      <input
        type="text"
        placeholder="Enter url here..."
        className="url-input"
        value={customUrl}
        onChange={(e) => setCustomUrl(e.target.value)}
      />
      <br />
      <br />
      <button onClick={fecthUrlById}>Fetch url and redirect</button>
    </Fragment>
  );
};

export default Home;
