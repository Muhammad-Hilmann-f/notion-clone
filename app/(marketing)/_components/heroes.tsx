import Image from "next/image";
import React from "react";

function Heroes() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 min-h-screen">
      <div className="flex flex-row justify-center items-center gap-x-8 w-full max-w-6xl">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents.png"
            width={400}
            height={400}
            className="object-contain dark:hidden"
            alt="Documents"
          />
          <Image
            src="/documents-dark.png"
            width={400}
            height={400}
            className="object-contain hidden dark:block"
            alt="Documents dark"
          />
        </div>

        <div className="hidden md:block relative w-[400px] h-[400px]">
          <Image
            src="/reading.png"
            width={400}
            height={400}
            className="object-contain dark:hidden"
            alt="Reading"
          />
          <Image
            src="/reading-dark.png"
            width={400}
            height={400}
            className="object-contain hidden dark:block"
            alt="Reading dark"
          />
        </div>
      </div>
    </div>
  );
}

export default Heroes;
