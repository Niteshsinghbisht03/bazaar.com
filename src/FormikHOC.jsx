import React from "react";

function FormikHOC(inputComponent) {
  function FormikInput({ name, ...rest }) {
    const field = useField(name);

    const [data, meta] = field;

    const { value, onChange, onBlur } = data;
    const { error, touched } = meta;

    let borderColour = "border-slate-600 focus:border-black";

    if (error && touched) {
      borderColour = "border-red-600 ";
    }

    return (
      <>
        <Input
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          error={error}
          touched={touched}
          name={name}
          {...rest}
        />
      </>
    );
  }
  return FormikInput;
}

export default FormikHOC;
