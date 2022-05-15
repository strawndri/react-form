import React from "react";

import Label from "./Label";
import Content from "./Content";
import Input from "./Input";

const Text = ({label, type, name, register }) => (
  <Label>
    <Content>{label}</Content>
    <Input type={type} name={name} {...register('test', { required: true })}/>
  </Label>
);

// Objeto do Field
const Field = {
    Text,
};

export default Field;
