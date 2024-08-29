const getFormErrorsFromState = (values: Record<string, string>) => {
  const formErrors = Object.keys(values).reduce((acc, item) => {
    if (!values[item].trim()) {
      return { ...acc, [item]: true };
    } else {
      return acc;
    }
  }, {});

  return formErrors;
};

export default getFormErrorsFromState;
