"use client";

import { ChevronsLeftRight, X } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";

interface UserItemProps {
  icon?: React.ReactNode;
  label?: string;
  isUserProfile?: boolean;
}

const UserItem: React.FC<UserItemProps> = ({
  icon,
  label,
  isUserProfile = false,
}) => {
  const { user } = useUser();

  // Jika komponen digunakan sebagai profil user
  if (isUserProfile) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-white/50 dark:hover:bg-white/10">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <span className="text-sm font-semibold text-gray-800 dark:text-white truncate">
                hiquerty35@gmail.com
              </span>
            </div>
            <ChevronsLeftRight className="w-4 h-4 text-gray-500 rotate-90" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>
            <SignOutButton>
              <div className="flex items-center gap-2">Sign Out</div>
            </SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Jika komponen digunakan sebagai item menu biasa
  return (
    <div className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-white/50 dark:hover:bg-white/10">
      {icon}
      <span className="text-sm font-semibold text-gray-800 dark:text-white">
        {label}
      </span>
    </div>
  );
};

export default UserItem;
