import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Form from "../Form";
import Field from "../Field";
import Button from "../Button";

const FormNew = () => {

  const schema = yup.object().shape({
    // name: yup
    //   .string()
    //   .min(2, "Digite no mínimo dois caracteres."),
      // .required("Campo Obrigatório"),

    email: yup
      .string()
      .email("Por favor, digite um e-mail válido.")
      .required("Campo Obrigatório"),

    // phone: yup
    //   .string()
    //   .phone("Digite um número de telefone válido")
    //   .required()
  }).required();

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
