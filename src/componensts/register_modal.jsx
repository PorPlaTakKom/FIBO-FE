// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import school from '../data/school_list.json';
import {useNavigate} from "react-router-dom";
const RegisterModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userType, setUserType] =useState(null)
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false)
    };

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(()=>{
        setSuggestions(school)
    },[])

    return (
        <div className={"flex w-3/12 bg-white drop-shadow-lg rounded-2xl pt-14 pb-14 overflow-hidden" + `${userType === "นักเรียน" ? ' h-5/6':' h-4/6'}`}>
            <div className={"flex flex-col w-full h-full space-y-3 font-heavent"}>
                <div className={"w-full h-12 text-center items-center"}>
                    <p className={"font-heavent_Bold text-4xl"}>ลงทะเบียน</p>
                </div>
                <div className={"w-full h-20"}>
                    <div className={"pl-10 pr-10"}>
                        <label className={'font-heavent font-bold text-lg'}>
                            อีเมล
                        </label>
                        <input placeholder={'อีเมล'}
                               onBlur={(event) => onChangData(event)}
                               id={'email'}
                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange'}/>
                    </div>
                </div>
                <div className={"w-full h-20"}>
                    <div className={"pl-10 pr-10"}>
                        <label className={'font-heavent font-bold text-lg pt-2 '}>
                            รหัสผ่าน
                        </label>
                        <input placeholder={'รหัสผ่าน'}
                               type={"password"}
                               onBlur={(event) => onChangData(event)}
                               id={'password'}
                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md  hover:border-orange'}/>
                    </div>
                </div>
                <div className={"w-full h-20"}>
                    <div className={"flex flex-row w-full h-full pl-10 pr-10 space-x-2"}>
                        <div className={"w-1/2"}>
                            <label className={'font-heavent font-bold text-lg'}>
                                ชื่อ
                            </label>
                            <input placeholder={'ชื่อ'}
                                   onBlur={(event) => onChangData(event)}
                                   id={'name'}
                                   className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange'}/>
                        </div>
                        <div className={"w-1/2"}>
                            <label className={'font-heavent font-bold text-lg'}>
                                นามสกุล
                            </label>
                            <input placeholder={'นามสกุล'}
                                   onBlur={(event) => onChangData(event)}
                                   id={'last_name'}
                                   className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange'}/>
                        </div>
                    </div>
                </div>
                <div className={"w-full h-20"}>
                    <div className={"pl-10 pr-10"}>
                        <label className={'font-heavent font-bold text-lg pt-2 '}>
                            ประเภทผู้ใช้งาน
                        </label>
                        <button
                            className="font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange"
                            onClick={toggleDropdown}
                        >
                            { userType ?? "เลือกประเภทผู้ใช้งาน"}
                        </button>
                        {isOpen && (
                            <div className="absolute bg-white mt-2 py-2 w-5/6 rounded-lg shadow-lg text-xl z-30">
                                <a
                                    onClick={()=> {
                                        setIsOpen(false)
                                        setUserType("นักเรียน")
                                    }}
                                    className="block px-4 py-2 text-gray-800 hover:bg-orange hover:text-white cursor-pointer"
                                >
                                    นักเรียน
                                </a>
                                <a  onClick={()=> {
                                    setIsOpen(false)
                                    setUserType("บุคคลทั่วไป")
                                }}
                                    className="block px-4 py-2 text-gray-800 hover:bg-orange hover:text-white cursor-pointer"
                                >
                                    บุคคลทั่วไป
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                {
                    (userType === 'นักเรียน') && (
                        <div className={"w-full h-20"}>
                            <div className={"pl-10 pr-10"}>
                                <label className={'font-heavent font-bold text-lg pt-2 '}>
                                    โรงเรียน
                                    <span className={"text-red-500 ml-1"}>
                                        *(หากไม่พบโรงเรียนโปรดเลือกประเภทผู้ใช้เป็นบุคคลทั่วไป)
                                    </span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange"
                                        placeholder="โรงเรียน"
                                        value={searchTerm}
                                        onFocus={()=> setShowSuggestions(true)}
                                        onChange={handleInputChange}
                                    />
                                    {searchTerm && showSuggestions && filteredSuggestions.length > 0 && (
                                        <ul className="absolute left-0 right-0 mt-2 bg-white rounded-bl-xl rounded-br-xl shadow-md overflow-auto">
                                            {filteredSuggestions.map((suggestion, index) => (
                                                <li
                                                    key={index}
                                                    className="px-4 py-2 cursor-pointer hover:bg-blue-200 text-xl"
                                                    onClick={() => {
                                                        handleSuggestionClick(suggestion)
                                                    }}
                                                >
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    userType === 'นักเรียน' && (
                        <div className={"w-full h-20"}>
                            <div className={"pl-10 pr-10"}>
                                <label className={'font-heavent font-bold text-lg pt-2 '}>
                                    รหัสนักเรียน
                                </label>
                                <input placeholder={'รหัสนักเรียน'}
                                       type={"text"}
                                       onBlur={(event) => onChangData(event)}
                                       id={'std_code'}
                                       className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md  hover:border-orange'}/>
                            </div>
                        </div>
                    )
                }
                <div className={"w-full h-20"}>
                    <div className={"pl-10 pr-10"}>
                        <label className={'font-heavent font-bold text-lg pt-2 '}>
                            รหัสห้องเรียน (ถ้ามี)
                        </label>
                        <input placeholder={'รหัสสมัครเข้าห้องเรียน'}
                               type={"text"}
                               onBlur={(event) => onChangData(event)}
                               id={'room_code'}
                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md  hover:border-orange'}/>
                    </div>
                </div>
                <div className={"w-full h-12 "}>
                    <div className={"pl-10 pr-10"}>
                        <button onClick={()=> navigate("/confirmOTP")} className={'w-full h-12 bg-orange text-white font-heavent text-2xl rounded-full'}>
                            ส่ง
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;