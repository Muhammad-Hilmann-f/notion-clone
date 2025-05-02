"use client";

import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

import UserItem from "./user-item";
import { menuItems } from "./menu-items";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button - only visible on small screens */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white/30 dark:bg-[#1f1f1f]/30 backdrop-blur-md border border-gray-200 dark:border-white/10 md:hidden"
      >
        {mobileMenuOpen ? (
          <X size={20} className="text-gray-700 dark:text-white" />
        ) : (
          <Menu size={20} className="text-gray-700 dark:text-white" />
        )}
      </button>

      {/* Navigation Sidebar */}
      <aside
        className={`h-full w-64 overflow-y-auto border-r
        bg-white/30 dark:bg-[#1f1f1f]/30 backdrop-blur-md
        border-gray-200 dark:border-white/10
        ${mobileMenuOpen ? "fixed left-0 z-40" : "fixed -left-64 z-40"}
        md:relative md:left-0 md:z-0 md:block`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Spacer untuk mobile view agar avatar berada di bawah tombol X */}
          <div className="h-14 md:hidden"></div>

          {/* User Profile */}
          <UserItem isUserProfile={true} />

          {/* Search */}
          <div className="flex items-center gap-2 px-2 py-2 bg-white/50 dark:bg-white/10 rounded-md mb-4 mt-6">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
            />
          </div>

          {/* Menu List */}
          <div className="space-y-1">
            <div className="text-xs uppercase text-gray-500 font-semibold mb-2">
              HELP
            </div>
            {menuItems.map(
              (item: { icon: React.ReactNode; label: string }, idx: number) => (
                <UserItem key={idx} icon={item.icon} label={item.label} />
              )
            )}
          </div>

          {/* Spacer di bagian bawah untuk tampilan yang lebih baik */}
          <div className="flex-1"></div>
        </div>
      </aside>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navigation;
