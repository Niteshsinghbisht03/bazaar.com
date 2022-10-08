import React from "react";

function FancyInput({ name, label, id, touched, error, ...rest }) {
  let borderColour = "border-slate-600 focus:border-black";

  if (touched && error) {
    borderColour = "border-red-700";
  }

  return (
    <>
      <div>
        <label htmlFor={id} className="text-base font-bold ">
          {label}
        </label>

        <input
          id={id}
          name={name}
          {...rest}
          className={"w-[100%] h-12 p-2 my-2 border " + borderColour}
        ></input>
        {touched && error && <div className="text-red-700">{error}</div>}
      </div>
    </>
  );
}

export default FancyInput;
