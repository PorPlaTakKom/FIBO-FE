import React, {useEffect, useState} from 'react';
import Nav from "../componensts/nav.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as RingLogo} from '../assets/icons/ring.svg';
import Show_print_item from "../componensts/show_print_item.jsx";
import Show_print_item_project from "../componensts/show_print_item_project.jsx";
const History = () => {
    const location = useLocation();
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [filter, setFilter] = useState('ทั้งหมด')
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setIsOpenFilter(!isOpenFilter);
    };

    const mockData = [
        {
            name: "Project 1",
            location: "ศูนย์พิมพ์โรงเรียนบางปะกอก",
            machine: "Canon ABCDE",
            size: 3,
            color: 'ดำ',
            status: 'กำลังพิมพ์',
            items: [
                {
                    name: "test01",
                    status: 'กำลังพิมพ์',
                    duration: 1,
                    machine: "Canon ABCDE",
                    color: 'ดำ'
                },
                {
                    name: "test02",
                    status: 'กำลังพิมพ์',
                    duration: 2,
                    machine: "Canon ABCDE",
                    color: 'ดำ'
                },
            ]
        },
        {
            name: "Project 2",
            location: "ศูนย์พิมพ์โรงเรียนบางปะกอก",
            machine: "Canon ABCDE",
            size: 3,
            color: 'ดำ',
            status: 'รอพิมพ์',
            items: [
                {
                    name: "test01",
                    status: 'รอพิมพ์',
                    duration: 1,
                    machine: "Canon ABCDE",
                    color: 'ดำ'
                },
                {
                    name: "test02",
                    status: 'รอพิมพ์',
                    duration: 2,
                    machine: "Canon ABCDE",
                    color: 'ดำ'
                },
            ]
        }
    ]

    return (
        <div className={"w-screen h-screen overflow-hidden"}>
            <div className={"flex w-full h-full"}>
                <div className={"w-1/6 h-full shadow-xl z-10"}>
                    <Nav page={location.pathname.slice(1,location.pathname.length)}/>
                </div>
                <div className={"flex pl-8 pr-8 flex-col w-5/6 h-full bg-gray-50 font-heavent"}>
                    <div className={"flex flex-col w-full h-32"}>
                        <div className={"flex flex-row items-center w-full h-24"}>
                            <div className={"flex w-1/2 justify-start"}>
                                <p className={"font-heavent_Bold text-orange text-5xl "}>ประวัติการพิมพ์</p>
                            </div>
                            <div className={"flex flex-row w-1/2 h-full justify-end items-center"}>
                                <div className={"flex h-full items-center space-x-5"}>
                                    <div className={"flex pl-12 w-1/2 items-center justify-end cursor-pointer"}>
                                        <RingLogo/>
                                    </div>
                                    <div onClick={()=> navigate("/profile")} className={"flex w-1/2 items-center cursor-pointer"}>
                                        <span className={"flex w-14 h-14 rounded-full bg-orange"}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col w-full h-full pb-20"}>
                        <div className={"flex w-full h-16"}>
                            <div className={"flex w-1/2 justify-start"}>
                                <p className={"font-heavent_Bold text-gray-500 text-2xl"}>ชิ้นงานของฉัน</p>
                            </div>
                            <div className={"flex w-1/2 justify-end"}>
                                <div className={"w-32"}>
                                    <button onClick={toggleDropdown} className="font-heavent text-xl w-full h-10 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange">
                                        {filter}
                                    </button>
                                    {isOpenFilter && (
                                        <div className="absolute bg-white mt-2 py-2 w-32 rounded-lg shadow-lg text-xl z-30">
                                            <a
                                                onClick={()=> {
                                                    setIsOpenFilter(false)
                                                    setFilter("ทั้งหมด")
                                                }}
                                                className="block px-4 py-2 text-gray-800 hover:bg-orange hover:text-white cursor-pointer"
                                            >
                                                ทั้งหมด
                                            </a>
                                            <a  onClick={()=> {
                                                setIsOpenFilter(false)
                                                setFilter("รอคิวพิมพ์")
                                            }}
                                                className="block px-4 py-2 text-gray-800 hover:bg-orange hover:text-white cursor-pointer"
                                            >
                                                รอคิวพิมพ์
                                            </a>
                                            <a  onClick={()=> {
                                                setIsOpenFilter(false)
                                                setFilter("กำลังพิมพ์")
                                            }}
                                                className="block px-4 py-2 text-gray-800 hover:bg-orange hover:text-white cursor-pointer"
                                            >
                                                กำลังพิมพ์
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-col space-y-3 w-full h-full pb-10 overflow-auto"}>
                            <Show_print_item item={mockData[0]}/>
                            {
                                mockData.map((item, index) => (
                                    <>
                                        <Show_print_item_project item={item} key={index}/>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;