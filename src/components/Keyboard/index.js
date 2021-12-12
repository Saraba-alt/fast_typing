import React, { useEffect, useState } from "react";
import css from "./style.module.css";

import Key from "../Key";
export default function Keyboard(props) {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key.length === 1) {
        props.textHandler(event.key);
      }
    });
  });
  const keys = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "delete",
    "tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "|",
    "caps-lock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "return",
    "shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "shift",
    "space",
  ];
  return (
    <div className={css.Keyboard}>
      {keys.map((el, i) => (
        <Key keyChar={el} key={(el, i)} />
      ))}
    </div>
  );
}
