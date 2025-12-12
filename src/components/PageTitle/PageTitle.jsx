import React from "react";

const PageTitle = ({ title }) => {
  return (
    <h1 className="sm:text-6xl text-3xl font-semibold title-font mb-2 text-[#236d6f]">
      {title}
    </h1>
  );
};

export default PageTitle;
