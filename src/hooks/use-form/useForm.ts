import { ChangeEvent, FormEvent, useState } from "react";

import getFormErrorsFromState from "@/hooks/use-form/getFormErrorsFromState";
import { UseFormParams } from "@/hooks/use-form/useForm.types";

// This hook works only with not nested text fields
const useForm = <T extends Record<string, string>>(
  params: UseFormParams<T>
) => {
  const [errors, setErrors] = useState<Partial<Record<keyof T, boolean>>>({});
  const [values, setValues] = useState(params.initialValues);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof T;
    const value = e.target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isAllTheFieldsFilled = Object.values(values).every((item) =>
      item.trim()
    );

    if (isAllTheFieldsFilled) {
      params.onSubmit(values);
      return;
    }

    const formErrors = getFormErrorsFromState(values);
    setErrors(formErrors);
  };

  return { onChange, onSubmit, values, errors };
};

export default useForm;
