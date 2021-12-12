import React from "react";
import css from "./style.module.css";

import Form from "../../components/Form";
import Title from "../../components/Title";
import Wrapper from "../../components/utilities/Wrapper";
import Button from "../../components/utilities/Button";

export default function Login() {
  return (
    <div className={css.LoginPage}>
      <Title>Хурдан бичлэг</Title>
      <Wrapper for="login">
        <Form type="username" />
        <Form type="password" />
        <Button text="Нэвтрэх" />
      </Wrapper>
    </div>
  );
}
