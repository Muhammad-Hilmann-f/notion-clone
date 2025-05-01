"use client";

import { useState } from "react";
import {
  BookOpen,
  LayoutDashboard,
  Settings,
  Search,
  Database,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { icon: <LayoutDashboard size={18} />, label: "Getting started" },
  { icon: <Database size={18} />, label: "Databases" },
  { icon: <BookOpen size={18} />, label: "Pages & blocks" },
  { icon: <Settings size={18} />, label: "Settings" },
];

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
        className={`h-full w-64 p-4 overflow-y-auto border-r 
    bg-white/30 dark:bg-[#1f1f1f]/30 backdrop-blur-md
    border-gray-200 dark:border-white/10
    ${mobileMenuOpen ? "fixed left-0 z-40" : "fixed -left-64 z-40"} 
    md:relative md:left-0 md:z-0 md:block`}
      >
        {/* Search */}
        <div className="flex items-center gap-2 px-2 py-2 bg-white/50 dark:bg-white/10 rounded-md mb-4 mt-8 md:mt-0">
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
            Help
          </div>
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className="w-full flex items-center gap-2 text-sm text-left px-3 py-2 rounded-md text-gray-700 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
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
