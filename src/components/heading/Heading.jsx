import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="text-center my-8">
      {/* Heading text */}
      <h1 className="text-3xl font-bold text-gray-800 inline-block relative">
        {text}
      </h1>

      {/* Line below */}
      <div className="mt-2 flex justify-center">
        <div className="h-1 bg-teal-600 w-[20%] rounded"></div>
      </div>
    </div>
  );
};

export default Heading;
