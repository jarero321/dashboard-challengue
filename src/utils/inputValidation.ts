import { TypeWithKey } from "../models/type-with-key";

export const inputValidation = (
  type: string,
  required: boolean
): TypeWithKey<string> => {
  const optionsType: TypeWithKey<any> = {
    default: {},
    text: {
      required: { value: required, message: "Campo obligatorio" },
    },
    email: {
      required: { value: required, message: "Campo obligatorio" },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
        message: "Introduce un email valido",
      },
    },
    password: {
      required: { value: required, message: "Campo obligatorio" },
    },
  };
  return optionsType[type] || optionsType["default"];
};
