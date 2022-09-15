import React from 'react';
import { Link } from 'react-router-dom';

function Pagenotfound() {
  return (
    <div className="p-10 sm:flex justify-center ">
      <div className="w-[40vw] aspect-square text-center">
        <img src="/src/pngegg.png " alt="error" className="animate-bounce h-full w-full object-cover" />
        <h1 className="text-4xl -mt-10 font-bold text-orange-600">Page Not Found!</h1>
      </div>
      <div className="flex flex-col sm:justify-center gap-2 sm:gap-10 w-[40vw] text-center">
        <div>
          <h2 className="sm:text-[150px]  text-3xl animate-pulse font-bold">404</h2>
        </div>
        <div>
          <p className="text-3xl">Aha! You See! You Can Be Wrong! </p>
          <p className="text-2xl">(or it could be us )....</p>
        </div>
        <div>
          <p className="text-3xl">....either way , you should probably</p>
          <p className="text-3xl text-slate-800">go back to the <Link to="/" className="bg-orange-600 hover:text-white border-2 border-solid border-black rounded-full text-2xl px-2" >HOME</Link> </p>
        </div>
      </div>
    </div>);
}

export default Pagenotfound;