import * as yup from "yup";

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

  export default schema;