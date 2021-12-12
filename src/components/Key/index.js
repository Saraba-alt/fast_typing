import React from "react";
import css from "./style.module.css";

export default function Key(props) {
  let classNameStr = `${css.Key} `;
  switch (props.keyChar) {
    case "space":
      classNameStr += `${css.Space}`;
      break;
    case "tab":
      classNameStr += `${css.Tab}`;
      break;
    case "delete":
      classNameStr += `${css.Delete}`;
      break;
    case "caps-lock":
      classNameStr += `${css.CapsLock}`;
      break;
    case "return":
      classNameStr += `${css.Return}`;
      break;
    case "shift":
      classNameStr += `${css.Shift}`;
      break;
    default:
      break;
  }
  if (props.clicked) classNameStr += `${css.Clicked}`;

  let textConverter = {
    "`": ["~", "`"],
    1: ["!  ", "1"],
    2: ["@  ", "2"],
    3: ["#  ", "3"],
    4: ["$  ", "4"],
    5: ["%  ", "5"],
    6: ["^  ", "6"],
    7: ["&  ", "7"],
    8: ["*  ", "8"],
    9: ["(  ", "9"],
    0: [")  ", "0"],
    "-": ["_  ", "-"],
    "=": ["+  ", "="],
    delete: ["delete"],
    tab: ["tab"],
    q: ["Q"],
    w: ["W"],
    e: ["E"],
    r: ["R"],
    t: ["T"],
    y: ["Y"],
    u: ["U"],
    i: ["I"],
    o: ["O"],
    p: ["P"],
    "[": ["{  ", "["],
    "]": ["}  ", "]"],
    "|": ["|  ", "\\"],
    "caps-lock": ["caps lock"],
    a: ["A"],
    s: ["S"],
    d: ["D"],
    f: ["F"],
    g: ["G"],
    h: ["H"],
    j: ["J"],
    k: ["K"],
    l: ["L"],
    ";": [";  ", ":"],
    "'": [`"  `, `'`],
    return: ["return"],
    shift: ["shift"],
    z: ["Z"],
    x: ["X"],
    c: ["C"],
    v: ["V"],
    b: ["B"],
    n: ["N"],
    m: ["M"],
    ",": ["<  ", ","],
    ".": [">  ", "."],
    "/": ["?  ", "/"],
    space: [""],
  };
  return <div className={classNameStr}>{textConverter[props.keyChar]}</div>;
}
