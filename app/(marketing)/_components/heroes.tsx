import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center gap-8">
        {" "}
        {/* Tambahin gap */}
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <img
            src="/documents.png"
            alt="documents"
            className="object-contain"
          />
        </div>
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] hidden md:block">
          <img src="/reading.png" alt="reading" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
