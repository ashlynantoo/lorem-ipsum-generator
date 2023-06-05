import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // for (let i = 0; i < count; i++) {
    //   setText((prevValue) => {
    //     return [...prevValue, data[i]];
    //   });
    // }
    let num = count;
    if (count < 1) {
      num = 1;
    }
    if (count > 9) {
      num = 9;
    }
    setText(data.slice(0, num));
  }

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">Paragraphs: </label>
        <input
          type="number"
          name="count"
          id="count"
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
        {text.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
