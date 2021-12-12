import React from "react";
import css from "./style.module.css";

export default function Button(props) {
  return <div className={css.Button}>{props.text}</div>;
}
