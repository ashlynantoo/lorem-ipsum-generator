import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let num = count,
      quotient = 0,
      content = [];
    if (count > data.length) {
      quotient = Math.floor(count / data.length);
      num = count % data.length;
      for (let i = 0; i < quotient; i++) {
        content = [...content, ...data];
      }
    }
    setText([...content, ...data.slice(0, num)]);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">Paragraphs: </label>
        <input
          type="number"
          name="count"
          id="count"
          min="1"
          max="50"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((para) => {
          return <p key={nanoid()}>{para}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
