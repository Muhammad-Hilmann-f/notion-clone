"use client";

import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full space-y-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          The connected workspace for your team
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          BlocNote is a collaborative workspace that brings your team together.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="purple" className="cursor-pointer">
            Get started
          </Button>
          <Button variant="outline" className="cursor-pointer">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
