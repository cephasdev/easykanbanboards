import { useState } from 'react';

function useForm(
  initialState: Record<string, string>,
  validate: (values: Record<string, string>) => Record<string, string | null>,
) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (callback: () => void) => (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (
      Object.keys(validationErrors).every(
        (key) => validationErrors[key] === null,
      )
    ) {
      callback();
      setIsSubmitted(true);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitted,
  };
}

export default useForm;
