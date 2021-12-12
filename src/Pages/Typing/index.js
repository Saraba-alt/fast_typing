import React, { useState } from "react";
import css from "./style.module.css";

import Wrapper from "../../components/utilities/Wrapper";
import TextField from "../../components/TextField";
import Keyboard from "../../components/Keyboard";

function Typing() {
  const [text, setText] = useState("");
  const textHandler = (key) => {
    setText(text + key);
  };
  return (
    <div className={css.TypingPage}>
      <Wrapper for="typing">
        <p>{text}</p>
        <TextField />
        <Keyboard textHandler={textHandler} />
      </Wrapper>
    </div>
  );
}

export default Typing;
