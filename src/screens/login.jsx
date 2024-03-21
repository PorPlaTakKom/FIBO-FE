import LoginModal from "../componensts/login_modal.jsx";

const Login = () => {
    return (
        <div className={`w-screen h-screen bg-[url('src/assets/images/bg.jpg')]`}>
            <div className={"flex w-full h-full justify-center items-center"}>
               <LoginModal/>
            </div>
        </div>
    );
};

export default Login;