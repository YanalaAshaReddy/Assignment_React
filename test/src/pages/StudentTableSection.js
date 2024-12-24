import  {Text } from "../components/Text";
import  {Img}  from "../components/Img";
import  {Heading}  from "../components/Headings";
import { ReactTable } from "../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [
    {
        rowstudentname: "Anshuman Kashyap",
        rowcohort: "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname:
            "Bansi Dadhaniya",
        rowcohort:
            "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname: "Chandrika Valotia",
        rowcohort: "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname:
            "Devang Dave",
        rowcohort:
            "AY 2024-25",
        rowcourses:
            "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname: "Forum Bhatt",
        rowcohort: "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname: "Hritika Dattani",
        rowcohort: "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname: "Khushi Joshi",
        rowcohort: "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname: "Mansi Patel",
        rowcohort: "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname: "Nita Shah",
        rowcohort: "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname: "Priyanshu Shirvastava",
        rowcohort: "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname:
            "Shreya Singhalia",
        rowcohort:
            "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname: "Vatsal Trivedi",
        rowcohort: "AY 2024-25",
        rowcourses: "CBSE 9 Science",
        rowdatejoined: "Nov. 2024",
        rowlastlogin: "Nov. 2024 4:16 PM",
    },
    {
        rowstudentname: "Ved Gupta",
        rowcohort: "AY 2024-25",
        rowcourses:
            "CBSE 9 Science",
        rowdatejoined: "Nov. 2024", rowlastlogin: "Nov. 2024 4:16 PM",
    },
];
export default function StudentTableSection() {
    const tableColumns = React.useMemo(() => {
        const tableColumnHelper = createColumnHelper();
        return [
            tableColumnHelper.accessor("rowstudentname", {
                cell: (info) => (
                    <div className="flex">
                        <Text as="p" className="self-end text-[12px] font-normal text-black-900_01">
                            {info.getValue()}
                        </Text>
                    </div>
                ),
                header: (info) => (
                    <div className="flex">
                        <Heading as="h3" className="mb-3.5 text-[12px] font-bold text-black-900_01">
                            Student Name
                        </Heading>
                    </div>
                ),
                meta: { width: "212px" },
            }),
            tableColumnHelper.accessor("rowcohort", {
                cell: (info) => (
                    <div className="flex">
                        <Text as="p" className="text-[12px] font-normal text-black-900_01">
                            {info.getValue()}
                        </Text>
                    </div>
                ),
                header: (info) => (
                    <div className="flex">
                        <Heading as="h3" className="mb-3.5 text-[12px] font-bold text-black-900_01">
                            Cohort
                        </Heading>
                    </div>
                ),
                meta: { width: "164px" },
            }),
            tableColumnHelper.accessor("rowcourses", {
                cell: (info) => (
                    <div className="flex flex-1 gap-2">
                        <div className="flex w-full items-center justify-center rounded-md bg-gray-50">
                            <Img src="images/img_image.png" alt="Image" className="h- [20px] rounded object-cover" />
                            <Text as="p" className="text-[12px] font-medium text-black-900_01">
                                {info.getValue()}
                            </Text>
                        </div>
                        <div className="flex w-full items-center justify-center rounded-md bg-gray-50">
                            <Img src="images/img_image_20x20.png" alt="Image" className="h-[20px] rounded object-cover" />
                            <Text as="p" className="text-[12px] font-medium text-black-900_01">
                                CBSE 9 Math
                            </Text>
                        </div>
                    </div>
                ),
                header: (info) => (
                    <div className="flex flex-1">
                        <Heading as="h3" className="mb-3.5 text-[12px] font-bold text-black-900_01">
                            Courses
                        </Heading>
                    </div>
                ),
                meta: { width: "290px" },
            }),
            tableColumnHelper.accessor("rowdatejoined", {
                cell: (info) => (
                    <div className="flex px-2">
                        <Text as="p" className="text-[12px] font-normal text-black-900_01">
                            {info.getValue()}
                        </Text>
                    </div>
                ),
                header: (info) => (
                    <div className="flex px-2">
                        <Heading as="h3" className="mb-3 text-[12px] font-bold text-black-900_01">
                            Date Joined
                        </Heading>
                    </div>
                ),
                meta: { width: "132px" },
            }),
            tableColumnHelper.accessor("rowlastlogin", {
                cell: (info) => (
                    <div className="ml-14 flex">
                        <Text as="p" className="text-[12px] font-normal text-black-900_01">
                            {info.getValue()}
                        </Text>
                    </div>
                ),
                header: (info) => (
                    <div className="ml-14 flex px-2">
                        <Heading as="h3" className="mb-3 text-[12px] font-bold text-black-900_01">
                            Last login
                        </Heading>
                    </div>
                ),
                meta: { width: "138px" },
            }),
            tableColumnHelper.accessor("rowstatus", {
                cell: (info) => (
                    <div className="ml-20 flex flex-col items-center px-2.5">
                        <div className="h-[14px] w-[14px] rounded-md bg-light_green-a700" />
                    </div>
                ),
                header: (info) => (
                    <div className="ml-20 flex">
                        <Heading as="h3" className="mb-3.5 text-[12px] font-bold text-black-900_01">
                            Status
                        </Heading>
                    </div>
                ),
                meta: { width: "38px" },
            }),
        ];
    }, []);
    return (
        <>
            {/* student table section */}
            <ReactTable
                size="xs"
                bodyProps={{ className:"" }}
                cellProps={{ className: "border-gray-200_01 border-b border-solid" }}
                className="mb-2.5 md:block md: overflow-x-auto md:whitespace-nowrap"
                columns={tableColumns}
                data={tableData}
            />
        </>
    );
} 
