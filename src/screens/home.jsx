import React, {useEffect, useState} from 'react';
import Nav from "../componensts/nav.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as PlusLogo} from '../assets/icons/plus.svg';
import {ReactComponent as RingLogo} from '../assets/icons/ring.svg';
import {ReactComponent as MakeLogo} from '../assets/icons/make.svg';
import {ReactComponent as TimeLogo} from '../assets/icons/time.svg';
import Show_print_item from "../componensts/show_print_item.jsx";
import Show_print_item_project from "../componensts/show_print_item_project.jsx";
import {StlViewer} from "react-stl-viewer";

const Home = () => {
        const location = useLocation();
        const [isOpenFilter, setIsOpenFilter] = useState(false);
        const [filter, setFilter] = useState('ทั้งหมด')
        const navigate = useNavigate();
        const [isOpenPopup, setIsOpenPopup] = useState(false)
        const [isUpload, setIsUpload] = useState(false)
        const [file, setFile] = useState(null);
        const [fileName, setFileName] = useState(null);
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

                {
                    isOpenPopup && (
                        <div
                            className={"absolute z-20 flex justify-center items-center z-50 w-full h-full bg-black bg-opacity-75"}>
                            <div className={"flex w-4/12 h-2/5 bg-white rounded-xl p-3 "}>
                                <label htmlFor={'file'}
                                       className={"flex z-30 flex-col font-heavent justify-center items-center w-full h-full border-2 border-gray-500 border-dashed rounded-xl cursor-pointer"}>
                                    <input onChange={(item) => {
                                        setFileName(item.target.files[0].name)
                                        setFile(URL.createObjectURL(item.target.files[0]))
                                        setIsUpload(!isUpload)
                                        setIsOpenPopup(!isOpenPopup)
                                    }} id={'file'} type={"file"} className={"flex w-full h-full hidden"}/>
                                    <MakeLogo/>
                                    <p className={"font-heavent font-bold text-2xl"}>อัปโหลดไฟล์ .stl .fbx</p>
                                    <p className={"font-heavent text-lg text-lg"}>(เลือกได้หลายไฟล์)</p>
                                </label>
                            </div>
                        </div>
                    )
                }
                {
                    isUpload && (
                        <div
                            className={"absolute z-20 flex font-heavent justify-center items-center z-50 w-full h-full bg-black bg-opacity-75"}>
                            <div className={"flex flex-col w-4/12 h-4/5 bg-white rounded-xl p-3 "}>
                                <div className={"flex w-full h-2/6"}>
                                    <StlViewer
                                        canvasId="1"
                                        extraHeaders={null}
                                        floorProps={{
                                            gridWidth: 500
                                        }}
                                        modelProps={{
                                            color: 'gray',
                                            positionX: 250,
                                            positionY: 250,
                                            ref: {
                                                current: '[Circular]'
                                            },
                                            rotationX: 0,
                                            rotationY: 0,
                                            rotationZ: 0,
                                            scale: 1
                                        }}
                                        onError={function noRefCheck() {
                                        }}
                                        onFinishLoading={function noRefCheck() {
                                        }}
                                        orbitControls
                                        shadows
                                        showAxes
                                        style={{
                                            backgroundColor: 'white',
                                            height: '100%',
                                            left: '0',
                                            top: '0',
                                            width: '100%'
                                        }}
                                        url={file}
                                    />
                                </div>
                                <div className={"flex flex-col w-full h-4/6 pt-2"}>
                                    <div className={"flex items-center w-full h-14 "}>
                                        <div className={"flex w-1/2"}>
                                            <p className={"font-bold text-3xl"}>{fileName}</p>
                                        </div>
                                        <div className={"flex items-center justify-end w-1/2"}>
                                            <TimeLogo/>
                                            <p className={"text-lg pl-2"}>ใช้เวลา 3 ชม.</p>
                                        </div>
                                    </div>
                                    <div className={"flex flex-col w-full h-full pt-2 space-y-1"}>
                                        <label className={'font-heavent font-bold text-lg'}>
                                            รหัสห้องเรียน
                                        </label>
                                        <input placeholder={'รหัสห้องเรียน'}
                                               disabled={true}
                                               onBlur={(event) => onChangData(event)}
                                               id={'class_code'}
                                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange'}/>
                                        <div className={"flex flex-row w-full h-auto space-x-2"}>
                                            <div className={"w-1/2"}>
                                                <label className={'font-heavent font-bold text-lg'}>
                                                    จังหวัด
                                                </label>
                                                <input placeholder={'กรุงเทพมหานคร'}
                                                       disabled={true}
                                                       onBlur={(event) => onChangData(event)}
                                                       id={'name'}
                                                       className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange'}/>
                                            </div>
                                            <div className={"w-1/2"}>
                                                <label className={'font-heavent font-bold text-lg'}>
                                                    ศูนย์พิมพ์
                                                </label>
                                                <input placeholder={'โรงเรียนบางปะกอกวิทยาคม'}
                                                       disabled={true}
                                                       onBlur={(event) => onChangData(event)}
                                                       id={'last_name'}
                                                       className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange'}/>
                                            </div>
                                        </div>
                                        <label className={'font-heavent font-bold text-lg'}>
                                            เครื่องพิมพ์
                                        </label>
                                        <input placeholder={'สีดำ'}
                                               disabled={true}
                                               onBlur={(event) => onChangData(event)}
                                               id={'class_code'}
                                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange'}/>
                                        <label className={'font-heavent font-bold text-lg'}>
                                            กรณีหมึกพิมพ์ไม่ตรงตามต้องการ
                                        </label>
                                        <div className={"flex w-full h-auto flex-row space-x-5 items-center"}>
                                            <label className={"flex text-lg"}>
                                                <input type={"radio"}/>
                                                <p className={"pl-1"}>พิพม์ต่อ</p>
                                            </label>
                                            <label className={"flex text-lg"}>
                                                <input type={"radio"}/>
                                                <p className={"pl-1"}>รอ</p>
                                            </label>
                                        </div>
                                        <div className={"w-full h-10"}>
                                            <button className={'w-full h-10 bg-gray-300 font-heavent text-2xl text-gray-500 rounded-lg'}>
                                                + เพิ่มไฟล์
                                            </button>
                                        </div>
                                        <div className={"flex w-full flex-row h-12 pt-5 space-x-2"}>
                                            <div className={"flex w-1/2 items-center justify-end cursor-pointer"}>
                                                <span className={"flex justify-center items-center w-32 h-10 border-2 border-orange text-orange rounded-full text-xl"}>
                                                    บันทึกเป็นแบบร่าง
                                                </span>
                                            </div>
                                            <div className={"flex w-1/2 items-center justify-start cursor-pointer"}>
                                                <span className={"flex justify-center items-center w-32 h-10 bg-orange text-white rounded-full text-xl"}>
                                                    ถัดไป
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
                <div className={"flex w-full h-full"}>
                    <div className={"w-1/6 h-full shadow-xl z-10"}>
                        <Nav page={location.pathname.slice(1, location.pathname.length)}/>
                    </div>
                    <div className={"flex pt-3 pl-8 pr-8 flex-col w-5/6 h-full bg-gray-50 font-heavent"}>
                        <div className={"flex flex-col w-full h-1/4"}>
                            <div className={"flex flex-row items-center w-full h-24"}>
                                <div className={"flex w-1/2 justify-start"}>
                                    <p className={"font-heavent_Bold text-orange text-5xl "}>หน้าหลัก</p>
                                </div>
                                <div className={"flex flex-row w-1/2 h-full justify-end items-center"}>
                                    <div className={"flex h-full items-center space-x-5"}>
                                        <div className={"flex pl-12 w-1/2 items-center justify-end cursor-pointer"}>
                                            <RingLogo/>
                                        </div>
                                        <div onClick={() => navigate("/profile")}
                                             className={"flex w-1/2 items-center cursor-pointer"}>
                                            <span className={"flex w-14 h-14 rounded-full bg-orange"}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex items-center w-full h-full"}>
                                <div onClick={() => setIsOpenPopup(!isOpenPopup)}
                                     className={"flex flex-col space-y-3 justify-center items-center w-52 h-32 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer"}>
                                    <PlusLogo/>
                                    <p className={"text-2xl text-gray-400"}>สร้างชิ้นงานใหม่</p>
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-col w-full h-3/4"}>
                            <div className={"flex w-full h-16"}>
                                <div className={"flex w-1/2 justify-start"}>
                                    <p className={"font-heavent_Bold text-gray-500 text-2xl"}>ชิ้นงานของฉัน</p>
                                </div>
                                <div className={"flex w-1/2 justify-end"}>
                                    <div className={"w-32"}>
                                        <button onClick={toggleDropdown}
                                                className="font-heavent text-xl w-full h-10 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange">
                                            {filter}
                                        </button>
                                        {isOpenFilter && (
                                            <div
                                                className="absolute bg-white mt-2 py-2 w-32 rounded-lg shadow-lg text-xl z-30">
                                                <a
                                                    onClick={() => {
                                                        setIsOpenFilter(false)
                                                        setFilter("ทั้งหมด")
                                                    }}
                                                    className="block px-4 py-2 text-gray-800 hover:bg-orange hover:text-white cursor-pointer"
                                                >
                                                    ทั้งหมด
                                                </a>
                                                <a onClick={() => {
                                                    setIsOpenFilter(false)
                                                    setFilter("รอคิวพิมพ์")
                                                }}
                                                   className="block px-4 py-2 text-gray-800 hover:bg-orange hover:text-white cursor-pointer"
                                                >
                                                    รอคิวพิมพ์
                                                </a>
                                                <a onClick={() => {
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
        )
            ;
    }
;

export default Home;