import React from 'react';
import {useLocation} from "react-router-dom";
import Nav from "../componensts/nav.jsx";
import {ReactComponent as RingLogo} from '../assets/icons/ring.svg';
import AddessCard from "../componensts/address_card.jsx";
import Class_card from "../componensts/class_card.jsx";
const Profile = () => {
    const location = useLocation();
    const addressMock = [
        "อมรพรรณ เลิศบรรณพันธุ์ 123/45 หมู่บ้านดาวอังคาร 2 ซอย 1 ถนนบางระจันทร์ 25 แขวงพลูโต เขตบางกรอบ กรุงเทพมหานคร 12345 08x-xxx-xxxx",
        "อมรพรรณ เลิศบรรณพันธุ์ 123/45 หมู่บ้านดาวอังคาร 2 ซอย 1 ถนนบางระจันทร์ 25 แขวงพลูโต เขตบางกรอบ กรุงเทพมหานคร 12345 08x-xxx-xxxx",
        "อมรพรรณ เลิศบรรณพันธุ์ 123/45 หมู่บ้านดาวอังคาร 2 ซอย 1 ถนนบางระจันทร์ 25 แขวงพลูโต เขตบางกรอบ กรุงเทพมหานคร 12345 08x-xxx-xxxx"
    ]
    const classRegisterMock = [
        {
            subject: 'วิชา 3D Model',
            code: 'ABCD1234',
            school: 'ศูนย์พิมพ์โรงเรียนบางปะกอกวิทยาคม',
            location: 'กรุงเทพมหานคร',
            duration: '15/7/2022',
            status: true
        },
        {
            subject: 'วิชา 3D Model',
            code: 'ABCD1234',
            school: 'ศูนย์พิมพ์โรงเรียนบางปะกอกวิทยาคม',
            location: 'กรุงเทพมหานคร',
            duration: '15/7/2022',
            status: true
        },
        {
            subject: 'วิชา 3D Model',
            code: 'ABCD1234',
            school: 'ศูนย์พิมพ์โรงเรียนบางปะกอกวิทยาคม',
            location: 'กรุงเทพมหานคร',
            duration: '15/7/2022',
            status: true
        },
        {
            subject: 'วิชา 3D Model',
            code: 'ABCD1234',
            school: 'ศูนย์พิมพ์โรงเรียนบางปะกอกวิทยาคม',
            location: 'กรุงเทพมหานคร',
            duration: '15/7/2022',
            status: false
        },
        {
            subject: 'วิชา 3D Model',
            code: 'ABCD1234',
            school: 'ศูนย์พิมพ์โรงเรียนบางปะกอกวิทยาคม',
            location: 'กรุงเทพมหานคร',
            duration: '15/7/2022',
            status: false
        },
        {
            subject: 'วิชา 3D Model',
            code: 'ABCD1234',
            school: 'ศูนย์พิมพ์โรงเรียนบางปะกอกวิทยาคม',
            location: 'กรุงเทพมหานคร',
            duration: '15/7/2022',
            status: false
        }
    ]
    return (
        <div className={"w-screen h-screen"}>
            <div className={"flex w-full h-full "}>
                <div className={"w-1/6 h-full shadow-xl z-10"}>
                    <Nav page={location.pathname.slice(1,location.pathname.length)}/>
                </div>
                <div className={"flex pl-8 pr-8 flex-col w-5/6 h-full bg-gray-50 font-heavent"}>
                    <div className={"flex flex-col w-full h-1/4 "}>
                        <div className={"flex flex-row items-center w-full h-24"}>
                            <div className={"flex w-1/2 justify-start"}>
                                <p className={"font-heavent_Bold text-orange text-5xl "}>โปรไฟล์</p>
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
                        <div className={"flex flex-row w-full h-full"}>
                            <div className={"flex items-center w-1/2 h-full"}>
                                <span className={"flex w-36 h-36 rounded-full bg-gray-300"}/>
                            </div>
                            <div className={"flex w-1/2 h-full justify-end pt-3 pr-52"}>
                                <span className={"flex items-center w-24 h-10 bg-orange justify-center rounded-full cursor-pointer"}>
                                   <p className={"text-white text-xl"}>แก้ไข</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-row w-full h-3/4 "}>
                        <div className={"flex flex-col w-1/2 "}>
                            <div className={"flex flex-col w-full h-full"}>
                                <div className={"w-full h-20"}>
                                    <div className={"pr-10"}>
                                        <label className={'font-heavent font-bold text-lg'}>
                                            อีเมล
                                        </label>
                                        <input placeholder={'อีเมล'}
                                               disabled={true}
                                               id={'email'}
                                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md '}/>
                                    </div>
                                </div>
                                <div className={"w-full h-20"}>
                                    <div className={"flex flex-row w-full h-full pr-10 space-x-2"}>
                                        <div className={"w-1/2"}>
                                            <label className={'font-heavent font-bold text-lg'}>
                                                ชื่อ
                                            </label>
                                            <input placeholder={'ชื่อ'}
                                                   disabled={true}
                                                   id={'name'}
                                                   className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md'}/>
                                        </div>
                                        <div className={"w-1/2"}>
                                            <label className={'font-heavent font-bold text-lg'}>
                                                นามสกุล
                                            </label>
                                            <input placeholder={'นามสกุล'}
                                                   disabled={true}
                                                   id={'last_name'}
                                                   className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md '}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"w-full h-20"}>
                                    <div className={"pr-10"}>
                                        <label className={'font-heavent font-bold text-lg'}>
                                            ประเภท
                                        </label>
                                        <input placeholder={'ประเภท'}
                                               disabled={true}
                                               id={'user_type'}
                                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md '}/>
                                    </div>
                                </div>
                                <div className={"w-full h-20"}>
                                    <div className={"pr-10"}>
                                        <label className={'font-heavent font-bold text-lg'}>
                                            โรงเรียน
                                        </label>
                                        <input placeholder={'โรงเรียน'}
                                               disabled={true}
                                               id={'school'}
                                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md '}/>
                                    </div>
                                </div>
                                <div className={"w-full h-20"}>
                                    <div className={"pr-10"}>
                                        <label className={'font-heavent font-bold text-lg'}>
                                            รหัสนักเรียน
                                        </label>
                                        <input placeholder={'รหัสนักเรียน'}
                                               disabled={true}
                                               id={'std_code'}
                                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md '}/>
                                    </div>
                                </div>
                                <div className={"w-full h-64"}>
                                    <div className={"pr-10"}>
                                        <label className={'font-heavent font-bold text-lg'}>
                                            ที่อยู่จัดส่ง
                                        </label>
                                        <div className={"flex items-center w-full h-40 space-x-2"}>
                                            {
                                            addressMock.length !== 0 ? addressMock.map((item, index) => {
                                                    if(index <= 2){
                                                        return <AddessCard address={item} key={index}/>
                                                    }}) :
                                                <div className={"flex items-center justify-center w-full"}>
                                                    <p className={"text-gray-500 text-2xl"}>ไม่มีที่อยู่จัดส่ง</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className={"flex items-center justify-center w-full h-14 pr-10"}>
                                        <p className={"text-xl font-heavent cursor-pointer underline text-gray-500"}>ดูเพิ่มเติม</p>
                                    </div>
                                </div>
                                <div className={"w-full h-14"}>
                                    <div className={"pr-10"}>
                                        <button onClick={()=> navigate("/confirmOTP")} className={'w-full h-10 bg-gray-300 font-heavent text-2xl text-gray-500 rounded-lg'}>
                                            + เพิ่มที่อยู่
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"w-1/2 h-full space-y-5"}>
                            <div className={"w-full h-64"}>
                                <div className={"pl-10 pr-10"}>
                                    <label className={'font-heavent_Bold text-4xl'}>
                                        คลาสเรียนที่ลงทะเบียน
                                    </label>
                                    <div className={"flex items-center w-full h-36 space-x-2"}>
                                        {
                                            classRegisterMock.length !== 0 ? classRegisterMock.map((item, index) => {
                                                if(index <= 2 && item.status){
                                                    return <Class_card item={item} key={index}/>
                                                }}):
                                                <div className={"flex items-center justify-center w-full"}>
                                                    <p className={"text-gray-500 text-2xl"}>ไม่มีคลาสที่ลงทะเบียนไว้</p>
                                                </div>
                                        }
                                    </div>
                                </div>
                                <div className={"flex items-center justify-center w-full h-10 pl-10 pr-10"}>
                                    <p className={"text-xl font-heavent cursor-pointer underline text-gray-500"}>ดูเพิ่มเติม</p>
                                </div>
                                <div className={"w-full h-10"}>
                                    <div className={"pl-10 pr-10"}>
                                        <button onClick={()=> navigate("/confirmOTP")} className={'w-full h-10 bg-gray-300 font-heavent text-2xl text-gray-500 rounded-lg'}>
                                            + เพิ่มคลาสเรียน
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={"w-full h-64 pt-10"}>
                                <div className={"pl-10 pr-10"}>
                                    <label className={'font-heavent_Bold text-4xl'}>
                                        คลาสเรียนที่จบแล้ว
                                    </label>
                                    <div className={"flex items-center w-full h-36 space-x-2"}>
                                        {
                                            classRegisterMock.length !== 0 ? classRegisterMock.map((item, index) => {
                                                let count = 0
                                                if(item.status === false && count <= 2){
                                                    count += 1
                                                    return <Class_card item={item} key={index}/>
                                                }}) :
                                                <div className={"flex items-center justify-center w-full"}>
                                                    <p className={"text-gray-500 text-2xl"}>ไม่มีคลาสที่จบแล้ว</p>
                                                </div>
                                        }
                                    </div>
                                </div>
                                <div className={"flex items-center justify-center w-full h-10 pl-10 pr-10"}>
                                    <p className={"text-xl font-heavent cursor-pointer underline text-gray-500"}>ดูเพิ่มเติม</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;