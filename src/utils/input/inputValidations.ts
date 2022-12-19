import { TypeWithKey } from "./../../models/type-with-key";

export const inputValidation = (type: string): TypeWithKey<any> => {
  const validationTypes: TypeWithKey<TypeWithKey<string | boolean>> = {
    required: { required: true, message: "este campo es requerido" },
    default: {},
  };
  return validationTypes[type]
    ? validationTypes[type]
    : validationTypes["default"];
};
