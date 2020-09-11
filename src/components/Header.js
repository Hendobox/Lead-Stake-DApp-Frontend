import React from "react";
import useWindowSize from "../hooks/useWindowSize";

export default () => {
  const size = useWindowSize();

  return (
    <header className="container mx-auto py-4">
      <div className="flex flex-row justify-between items-center">
        <div className="logo flex flex-row items-center">
          <img
            src="/images/logo.svg"
            width="40"
            className="cursor-pointer"
            alt="LEAD"
          />
          <div className="font-extrabold text-white text-4xl ml-2">LEAD</div>
        </div>
        <div className="cursor-pointer">
          <img src="/images/hamburgar.svg" width="40" alt="hamburgar" />
        </div>
      </div>
    </header>
  );
};