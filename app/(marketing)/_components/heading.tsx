"use client";

import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-0 max-w-3xl mx-auto space-y-6 text-center md:text-left">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        The connected workspace for your team
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground">
        BlocNote is a collaborative workspace that brings your team together.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
        <Button variant="purple" className="cursor-pointer">
          Get started
        </Button>
        <Button variant="outline" className="cursor-pointer">
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default Heading;
