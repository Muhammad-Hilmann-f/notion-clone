import React from "react";
import { BookOpen, LayoutDashboard, Settings, Database } from "lucide-react";

export const menuItems = [
  { icon: <LayoutDashboard size={18} />, label: "Getting started" },
  { icon: <Database size={18} />, label: "Databases" },
  { icon: <BookOpen size={18} />, label: "Pages & blocks" },
  { icon: <Settings size={18} />, label: "Settings" },
];
