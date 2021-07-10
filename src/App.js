import { useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState([]);
  let count = 1;
  const [status, setStatus] = useState(false);
  const [load, setLoad] = useState("");
  const getit = async () => {
    const data = await fetch(
      "https://g.tenor.com/v1/categories?key=LIVDSRZULELA"
    );
    const original = await data.json();
    setShow(original);
    setStatus(true);
    setLoad("Loading the GIF number which suits you.....");
    setTimeout(() => {
      const num = Math.floor(Math.random() * 56) + 1;
      setLoad(num);
    }, 3000);
  };
  return (
    <div className="App">
      <button className="App" onClick={getit}>
        Click me
      </button>
      <div>{load}</div>
      <hr />
      <div className="container">
        {status ? (
          show.tags.map((e) => {
            return (
              <div className="inside">
                <div>{count++}</div>
                <img
                  style={{ width: 200, height: 120 }}
                  src={e.image}
                  alt={e.searchterm}
                />
              </div>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
