import React from "react";
import css from "./style.module.css";

export default function Form(props) {
  const labelText = props.type === "username" ? "Нэвтрэх нэр:" : "Нууц үг:";
  return (
    <div className={css.FormWrapper}>
      <label for="userName" className={css.FormLabel}>
        {labelText}
      </label>
      <input type={props.type} className={css.FormInput} />
    </div>
  );
}
