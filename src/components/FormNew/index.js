import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./validation";

import Form from "../Form";
import Field from "../Field";
import Button from "../Button";

const FormNew = () => {

  const { register, handleSubmit, formState:{ errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const newUser = (user) => {
    console.log(user);
  };

  return (
    <Form onSubmit={handleSubmit(newUser)}>

      {/* <Field.Text label="Nome" name="name" type="text" register={register} />
      <p>{errors.name?.message}</p> */}

      <Field.Text label="Email" name="email" type="email" register={register} />
      <p>{errors.email?.message}</p>

      {/* <Field.Text label="Telefone" name="phone" type="tel" register={register} />
      <p>{errors.phone?.message}</p> */}

      {/* União Label + Input */}
      <Button> Enviar </Button>
    </Form>
  );
};

export default FormNew;
