import React from 'react';
import Confirm_otp_modal from "../componensts/confirm_otp_modal.jsx";

const ConfirmOtp = () => {
    return (
        <div className={`w-screen h-screen bg-[url('src/assets/images/bg.jpg')]`}>
            <div className={"flex w-full h-full justify-center items-center"}>
                <Confirm_otp_modal/>
            </div>
        </div>
    );
};

export default ConfirmOtp;