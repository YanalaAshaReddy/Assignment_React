import React from "react";
import Header from "../components/Header";
import SidebarComponent from "../components/SidebarComponent";
// import { Button } from "../components/Button";
import { Img } from "../components/Img";
import { SelectBox } from "../components/SelectBox";
import StudentTableSection from "./StudentTableSection";
import '../styles/Overallview.css'
import { Button } from "react-bootstrap";

const dropDownOptions1 = [
  { label: "AY 2024-25", value: "AY 2024-25" },
  { label: "AY 2023-24", value: "AY 2023-24" },
  { label: "AY 2022-23", value: "AY 2022-23" },
];
const dropDownOptions2 = [
  { label: "CBSE 9 Science", value: "AY 2024-25" },
  { label: "CBSE 9 Math", value: "AY 2023-24" },
];

export default function OverallviewPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="main-component" >
        {/* Sidebar */}
        <SidebarComponent />
      

        {/* Main Content */}
        <div>
          {/* Dropdowns and Add Button */}
          <div className="flex justify-between items-center mb-6 main-component">
            {/* Dropdowns */}
             <div className="flex gap-4 main-component"> 
              <SelectBox
                indicator={<Img src="Images/img_arrowdown.svg" alt="Arrow Down" />}
                name="academicYear"
                placeholder="AY 2024-25"
                options={dropDownOptions1}
                className="flex w-[150px] items-center rounded bg-gray-200 px-4 py-2 text-blue-700 font-semibold"
              />
              <SelectBox
                indicator={<Img src="Images/img_arrowdown.svg" alt="Arrow Down" />}
                name="class"
                placeholder="CBSE 9"
                options={dropDownOptions2}
                className="flex w-[150px] items-center rounded bg-gray-200 px-4 py-2 text-blue-700 font-semibold"
              />
            </div>

            {/* Add New Student Button */}
            <div className="button-styling"><Button className="main-component" 
              
            > <Img src="Images/img_plus.svg" alt="Plus" /> 
              <div className="flex text-center">&nbsp;&nbsp;Add New Student</div>
            </Button></div>
          </div>

          {/* Table Section */}
          <div className="bg-white shadow rounded-lg p-4">
            <StudentTableSection />
          </div>
        </div>
      </div>
      
    </div>
  );
}
