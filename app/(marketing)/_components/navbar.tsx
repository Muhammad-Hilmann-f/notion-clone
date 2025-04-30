"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import Logo from "./logo";

import { useConvexAuth } from "convex/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { useUser } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Spinner from "@/components/ui/spinner";
import Link from "next/link";

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-x-2">
          <div className="hidden md:flex items-center gap-x-2">
            {isLoading ? (
              <Spinner />
            ) : isAuthenticated ? (
              <>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">
                    {user?.username || user?.fullName}
                  </span>
                  <UserButton afterSignOutUrl="/" />
                  <Button variant="outline">
                    <Link href="/documents">Enter BlocNote</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    Sign In
                  </Button>
                </SignInButton>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    Get BlocNote free
                  </Button>
                </SignInButton>
              </>
            )}
          </div>

          <div className="md:flex items-center gap-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  {mounted && theme === "dark" ? <Sun /> : <Moon />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem
                  onClick={() => handleThemeChange("light")}
                  className="cursor-pointer"
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeChange("dark")}
                  className="cursor-pointer"
                >
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
