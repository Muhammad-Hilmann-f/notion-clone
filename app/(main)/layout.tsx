"use client";

import Spinner from "@/components/ui/spinner";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Navigation from "./_components/navigation";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-muted">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Please log in to access your documents
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
          Your ideas, notes, and projects are waiting. Sign in to access your
          BlocNote workspace.
        </p>
        <SignInButton mode="modal">
          <Button className="mt-6 gap-2" variant="default" size="lg">
            <LogIn className="w-4 h-4" />
            Sign In
          </Button>
        </SignInButton>
      </div>
    );
  }

  return (
    <div className="h-full flex bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-white">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto pl-0 md:pl-64">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
