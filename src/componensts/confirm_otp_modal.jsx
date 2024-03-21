import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ReactCodeInput from "react-code-input";
import Register_succeeded_modal from "./register_succeeded_modal.jsx";

const ChangePasswordModal = () => {
    const navigate = useNavigate();
    const [isSent, setIsSent] = useState(false)
    return (
        !isSent ?
        <div className={"flex w-3/12 h-2/6 bg-white drop-shadow-lg rounded-2xl pt-10 pb-10 overflow-hidden"}>
            <div className={"flex flex-col w-full h-full space-y-3 font-heavent"}>
                <div className={"w-full h-12 text-center items-center"}>
                    <p className={"font-heavent_Bold text-4xl"}>ยืนยันรหัส OTP</p>
                </div>
                <div className={"w-full h-24"}>
                    <div className={"flex justify-center pl-10 pr-10"}>
                        <ReactCodeInput
                            id="pinCode"
                            type="number"
                            fields={6}
                            inputStyle={{
                                width: 55,
                                height: 70,
                                borderWidth: 2,
                                borderRadius: 6,
                                justifyContent: "space-between",
                                fontSize: 32,
                                textAlign: 'center',
                                margin: '2px',
                            }}
                        />
                    </div>
                </div>
                <div className={"w-full h-12"}>
                    <div className={"pl-10 pr-10 text-center"}>
                        <p className={"text-lg text-gray-500"}>โปรดตรวจสอบอีเมลของคุณ เพื่อป้อนรหัส OTP ที่ได้รับ</p>
                    </div>
                </div>
                <div className={"w-full h-12"}>
                    <div className={"flex pl-32 pr-32"}>
                        <button onClick={()=> setIsSent(true)} className={'w-full h-12 bg-orange text-white font-heavent text-2xl rounded-full'}>
                            ยืนยันการลงทะเบียน
                        </button>
                    </div>
                </div>
                <div className={"w-full h-12"}>
                    <div className={"flex w-full h-full justify-center items-center pl-10 pr-10"}>
                        <p className={"text-xl"}>
                            หากไม่ได้รับอีเมล
                            <span className={'font-heavent text-orange underline cursor-pointer font-bold pl-1'}>
                                ส่งอีกครั้ง
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div> :
            <Register_succeeded_modal/>
    );
};

export default ChangePasswordModal;