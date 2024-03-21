import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import Nav from "../componensts/nav.jsx";
import {ReactComponent as RingLogo} from '../assets/icons/ring.svg';
import {ReactComponent as CalenderLogo} from '../assets/icons/calender.svg';
import Printer_live_card from "../componensts/printer_live_card.jsx";
const Print = () => {
    const location = useLocation();
    const [isOpenFilterPrint, setIsOpenFilterPrint] = useState(false);
    const [filterPrint, setFilterPrint] = useState('ทั้งหมด')
    const [isOpenFilterProvince, setIsOpenFilterProvince] = useState(false);
    const [filterProvince, setFilterProvince] = useState('ทั้งหมด')

    const schoolMock = [
        "บางประกอกวิทยาคม",
        "บางขุนเทียนศึกษา",
        "บางมดวิทยาคม"
    ]

    const provinceMock = [
        "กรุงเทพมหานคร",
        "สมุทรปราการ",
        "นนทบุรี",
        "ปทุมธานี",
        "พระนครศรีอยุธยา",
        "อ่างทอง",
        "ลพบุรี"
    ]

    const printMock = [{},{},{},{},{},{},{},{},{},{}]
    const toggleDropdownPrint = () => {
        setIsOpenFilterPrint(!isOpenFilterPrint);
    };
    const toggleDropdownProvince = () => {
        setIsOpenFilterProvince(!isOpenFilterProvince);
    };
    return (
        <div className={"w-screen h-screen"}>
            <div className={"flex w-full h-full"}>
                <div className={"w-1/6 h-full shadow-xl z-10"}>
                    <Nav page={location.pathname.slice(1,location.pathname.length)}/>
                </div>
                <div className={"flex pt-3 pl-8 pr-8 flex-col w-5/6 h-full bg-gray-50 font-heavent"}>
                    <div className={"flex flex-col w-full h-1/4"}>
                        <div className={"flex flex-row items-center w-full h-24"}>
                            <div className={"flex w-1/2 justify-start"}>
                                <p className={"font-heavent_Bold text-orange text-5xl "}>ศูนย์พิมพ์ทั้งหมด</p>
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
                        <div className={"flex items-center flex-row w-full h-20"}>
                            <div className={"flex flex-row w-1/2 h-full"}>
                                <div className={"flex flex-col w-1/2 h-full"}>
                                    <label className={'font-heavent font-bold text-lg'}>
                                        จังหวัด
                                    </label>
                                    <div className={"w-10/12"}>
                                        <button onClick={toggleDropdownProvince} className="font-heavent text-xl w-full h-10 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange">
                                            {filterProvince}
                                        </button>
                                        {isOpenFilterProvince && (
                                            <div className="absolute bg-white mt-2 py-2 w-80 h-44 rounded-lg shadow-lg text-xl z-30 overflow-auto">
                                                {provinceMock.map((item, index) => (
                                                    <a
                                                        onClick={()=> {
                                                            setIsOpenFilterProvince(false)
                                                            setFilterProvince(item)
                                                        }}
                                                        className="block px-4 py-2 text-gray-800 hover:bg-orange hover:text-white cursor-pointer"
                                                    >
                                                        {item}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={"flex flex-col w-1/2 h-full "}>
                                    <label className={'font-heavent font-bold text-lg'}>
                                        ศูนย์พิมพ์
                                    </label>
                                    <div className={"w-10/12"}>
                                        <button onClick={toggleDropdownPrint} className="font-heavent text-xl w-full h-10 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange">
                                            {filterPrint}
                                        </button>
                                        {isOpenFilterPrint && (
                                            <div className="absolute bg-white mt-2 py-2 w-80 h-auto rounded-lg shadow-lg text-xl z-30 overflow-auto">
                                                {schoolMock.map((item, index) => (
                                                    <a
                                                        onClick={()=> {
                                                            setIsOpenFilterPrint(false)
                                                            setFilterPrint(item)
                                                        }}
                                                        className="block px-4 py-2 text-gray-800 hover:bg-orange hover:text-white cursor-pointer"
                                                    >
                                                        {item}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={"flex w-1/2 h-full justify-end items-center "}>
                                <span className={"flex items-center pl-3 w-40 h-10 bg-orange rounded-full cursor-pointer"}>
                                    <CalenderLogo/>
                                    <p className={"text-xl pl-3 text-white"}>คิวพิมพ์ทั้งหมด</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full h-full mb-5 overflow-auto"}>
                        <div className={"flex flex-wrap gap-0 w-full h-auto"}>
                                {
                                    printMock.map((item, index) => (
                                        <Printer_live_card key={index}/>
                                    ))
                                }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Print;