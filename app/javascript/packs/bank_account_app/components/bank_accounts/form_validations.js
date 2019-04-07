export const validate = (values) => {
  const errors = {};

  if (!values.name && !values.id) {
    errors.name = "Required";
  }

  return errors;
};
