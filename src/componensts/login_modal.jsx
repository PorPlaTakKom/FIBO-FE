import {useNavigate} from "react-router-dom";

const LoginModal = () => {
    const navigate = useNavigate();

    return (
        <div className={"flex w-3/12 h-3/6 bg-white drop-shadow-lg rounded-2xl pt-14 pb-14 overflow-hidden"}>
            <div className={"flex flex-col w-full h-full space-y-3 font-heavent"}>
                <div className={"w-full h-12 text-center items-center"}>
                    <p className={"font-heavent_Bold text-4xl"}>เข้าสู่ระบบ</p>
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
                        <input placeholder={' รหัสผ่าน'}
                               type={"password"}
                               onBlur={(event) => onChangData(event)}
                               id={'password'}
                               className={'pl-3 font-heavent text-xl w-full h-11 focus:outline-0 border-2 border-gray-200 rounded-md  hover:border-orange'}/>
                    </div>
                </div>
                <div className={"w-full h-12"}>
                    <div className={"flex justify-end pl-10 pr-10"}>
                         <span onClick={() => navigate('/changepassword')} className={'font-heavent text-orange underline cursor-pointer font-bold text-xl'}>
                                ลืมรหัสผ่าน?
                         </span>
                    </div>
                </div>
                <div className={"w-full h-12"}>
                    <div className={"flex pl-10 pr-10"}>
                        <button onClick={() => navigate('/home') }  className={'w-full h-12 bg-orange text-white font-heavent text-2xl rounded-full'}>
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>
                <div className={"w-full h-12"}>
                    <div className={"flex w-full h-full justify-center items-center pl-10 pr-10"}>
                        <p className={"text-2xl"} >
                            หากยังไม่มีบัญชี
                            <span onClick={() => navigate('/register') } className={'font-heavent text-orange underline cursor-pointer font-bold pl-1'}>
                                ลงทะเบียนผู้ใช้
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;