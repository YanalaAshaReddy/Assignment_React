import React from "react";
import { Img } from "../components/Img";
import { Input } from "../components/Input";
import { Heading } from "../components/Headings";
import { CloseSVG } from "../components/close";
import "../styles/Header.css"

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <nav className="flex row items-center justify-between px-6 h-[72px] bg-gray-50 shadow-sm w-full fixed top-0 z-10 nav-style">
      {/* Search Input */}
      <div className="flex items-center search-style profile-style">
        <Input
          name="search"
          placeholder="Search your course"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          prefix={<Img src="Images/img_search.svg" alt="search" />}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG
                onClick={() => setSearchBarValue("")}
                height={18}
                width={18}
                fillColor="#808281ff"
              />
            ) : null
          }
          className="flex h-[48px] w-full rounded-[12px] bg-white px-5 text-gray-600 shadow-sm name-style"
        />
      </div>

      {/* Navigation Items */}
      <div className="flex items-center gap-6 nav-style name-style">
        {/* Help Icon */}
        <a href="#" className="hover:opacity-80 help-style name-style">
          <Img src="Images/img_help.svg" alt="Help" className="h-[24px] w-[24px]" />
        </a>

        {/*Notifications */}
         <div className="relative name-style">
          <Img
            src="Images/img_group_1.svg"
            alt="Notifications"
            className="h-[24px] w-[24px]"
          />
          <span className="absolute top-0 right-0 h-[10px] w-[10px] bg-red-500 rounded-full border border-white"></span>
        </div>

        {/* Settings Icon */}
        <a href="#" className="hover:opacity-80 name-style">
          <Img
            src="Images/settings_img"
            alt="Settings"
            className="h-[24px] w-[24px]"
          />
        </a>

        {/* User Profile */}
        <div className="flex items-center gap-5 nav-style px-3 py-2 name-style ">
          <a href="#">
            <Img width="70px" height="50px"
              src="Images/img_play.png"
              alt="User"
              className="h-[15px] w-[15px] rounded-full"
            />
          </a>
          <h5 className="name-style"> Adeline H. Dancy </h5>
          {/* <Heading as="h5" className=" font-semibold text-center text-xl">
            Adeline H. Dancy
          </Heading> */}
        </div>
      </div>
    </nav>
  );
}
