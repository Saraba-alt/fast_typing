import React from "react";
import css from "./style.module.css";

export default function Wrapper(props) {
  let classNameStr;
  if (props.for === "login") classNameStr = `${css.Wrapper}`;
  else if (props.for === "typing") classNameStr = `${css.Wrapper} ${css.Wide}`;
  return <div className={classNameStr}>{props.children}</div>;
}
