import React from 'react';
import Change_password_modal from "../componensts/change_password_modal.jsx";
import Sent_email_succeeded_modal from "../componensts/sent_email_succeeded_modal.jsx";

const ChangePassword = () => {
    return (
        <div className={`w-screen h-screen bg-[url('src/assets/images/bg.jpg')]`}>
            <div className={"flex w-full h-full justify-center items-center"}>
                <Change_password_modal/>
            </div>
        </div>
    );
};

export default ChangePassword;