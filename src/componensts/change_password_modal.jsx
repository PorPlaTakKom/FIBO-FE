import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Sent_email_succeeded_modal from "./sent_email_succeeded_modal.jsx";

const ChangePasswordModal = () => {
    const navigate = useNavigate();
    const [isSent, setIsSent] = useState(false)
    return (
        !isSent ?
        <div className={"flex w-3/12 h-2/6 bg-white drop-shadow-lg rounded-2xl pt-10 pb-10 overflow-hidden"}>
            <div className={"flex flex-col w-full h-full space-y-5 font-heavent"}>
                <div className={"w-full h-12 text-center items-center"}>
                    <p className={"font-heavent_Bold text-4xl"}>เปลี่ยนรหัสผ่าน</p>
                </div>
                <div className={"w-full h-24"}>
                    <div className={"pl-10 pr-10"}>
                        <p className={"font-heavent_Bold text-xl"}>ระบุอีเมลที่คุณใช้ลงทะเบียน</p>
                        <label className={'font-heavent_Bold text-xl'}>
                            อีเมล
                        </label>
                        <input placeholder={'อีเมล'}
                               onBlur={(event) => onChangData(event)}
                               id={'email'}
                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md hover:border-orange'}/>
                    </div>
                </div>
                <div className={"w-full h-12"}>
                    <div className={"flex pl-10 pr-10"}>
                        <button onClick={()=> setIsSent(true)} className={'w-full h-12 bg-orange text-white font-heavent text-2xl rounded-full'}>
                            ส่ง
                        </button>
                    </div>
                </div>
                <div className={"w-full h-12"}>
                    <div className={"flex w-full h-full justify-center items-center pl-10 pr-10"}>
                        <p className={"text-2xl"}>
                            กลับไปยังหน้า
                            <span onClick={() => navigate('/') } className={'font-heavent text-orange underline cursor-pointer font-bold pl-1'}>
                                เข้าสู่ระบบ
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div> :
            <Sent_email_succeeded_modal/>
    );
};

export default ChangePasswordModal;