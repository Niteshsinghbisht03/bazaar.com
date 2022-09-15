import React, { useEffect } from 'react';

function NoMatching({ children }, key) {

  useEffect(function() { console.log("effect code running"); }, []);


  return (
    <div className="p-5 bg-indigo-500  text-3xl mx-auto my-auto">{children}</div>);
}

export default NoMatching;