import React from 'react';
import { ImSpinner10 } from 'react-icons/im';

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin	text-5xl">
        <ImSpinner10 />
      </div>
    </div>
  );
}

export default Loading;
