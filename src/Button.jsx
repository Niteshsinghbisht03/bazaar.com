import React, { memo } from "react";

function Button(props) {
  return (
    <div>
      <button
        {...props}
        type="submit"
        className="px-12 py-2 ml-4 text-xl text-white bg-orange-600 rounded-md"
      ></button>
    </div>
  );
}

const memobutton = memo(Button);
export default memobutton;
