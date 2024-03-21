import React from 'react';
import RegisterModal from "../componensts/register_modal.jsx";

const Register = () => {
    return (
        <div className={`w-screen h-screen bg-[url('src/assets/images/bg.jpg')]`}>
            <div className={"flex w-full h-full justify-center items-center"}>
                <RegisterModal/>
            </div>
        </div>
    );
};

export default Register;