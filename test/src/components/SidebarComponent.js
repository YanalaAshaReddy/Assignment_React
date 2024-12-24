import React from "react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Img } from "../components/Img";

export default function SidebarComponent() {
  const [collapsed] = React.useState(false);

  return (
    <Sidebar
      width="250px"
      collapsedWidth="80px"
      collapsed={collapsed}
      className="flex flex-col h-screen pt-5 px-3 bg-white-a700 sticky top-0 overflow-auto"
    >
      {/* Sidebar Logo */}
      <Img
        src="Images/img_sidebar_logo.svg"
        alt="Sidebar Logo"
        className="h-[42px] w-[98px] object-contain"
      />

      {/* Menu Items */}
      <Menu className="mt-10 flex flex-col w-full">
        <MenuItem icon={<Img src="Images/img_frame.svg" alt="Dashboard Icon" />}>
          Dashboard
        </MenuItem>
        <MenuItem
          icon={<Img src="Images/img_frame_black_900_01.svg" alt="Students Icon" />}
        >
          Students
        </MenuItem>
        <MenuItem
          icon={<Img src="Images/img_settings.svg" alt="Chapters Icon" />}
        >
          Chapters
        </MenuItem>
        <MenuItem
          icon={<Img src="Images/img_report.svg" alt="Reports Icon" />}
        >
          Reports
        </MenuItem>
        <MenuItem
          icon={<Img src="Images/img_setting.svg" alt="Settings Icon" />}
        >
          Settings
        </MenuItem>
      </Menu>

      {/* Footer (optional) */}
      {!collapsed && <div className="mt-auto h-[40px] bg-gray-50 rounded-md" />}
    </Sidebar>
  );
}
