import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import Form from "../Form";
import Field from "../Field";
import Button from "../Button";

const FormNew = () => {

  const schema = yup.object({
    email: yup.string().email("Por favor, digite um email válido.").required("Este campo é obrigatório."),
  });

  const { register, handleSubmit, erros } = useForm({
    resolver: yupResolver(schema),
  });

  const newUser = (user) => {
    console.log(user);
  };

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Text label="Email" type="email" name="email" register={register} />
      {erros.email?.message}
      {erros.email?.type}
      {/* União Label + Input */}
      <Button> Enviar </Button>
    </Form>
  );
};

export default FormNew;
