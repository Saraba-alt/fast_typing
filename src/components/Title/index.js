import React from "react";
import css from "./style.module.css";

export default function Title(props) {
  return <h1 className={css.Title}>{props.children}</h1>;
}
