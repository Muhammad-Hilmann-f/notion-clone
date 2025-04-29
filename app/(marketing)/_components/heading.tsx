"use client";

import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Your all-in-one workspace for notes, tasks, and collaboration
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          BlocNote is a collaborative workspace that brings your team together.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="cursor-pointer">Enter BlocNote</Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
