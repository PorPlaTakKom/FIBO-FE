import {ReactComponent as CorrectLogo} from '../assets/icons/Correct-fill.svg';
import {useNavigate} from "react-router-dom";
const SentEmailSucceededModal = () => {
    const navigate = useNavigate();

    return (
        <div className={"flex w-3/12 h-2/6 bg-white drop-shadow-lg rounded-2xl pt-14 pb-14 overflow-hidden"}>
            <div className={"flex flex-col w-full h-full space-y-8 font-heavent"}>
                <div className={"flex w-full h-24 justify-center"}>
                    <CorrectLogo/>
                </div>
                <div className={"w-full h-12 text-center justify-center items-center"}>
                    <p className={"font-heavent_Bold text-4xl"}>ลงทะเบียนเสร็จสิ้น</p>
                </div>
                <div className={"w-full h-12"}>
                    <div className={"flex w-full h-full justify-center items-center pl-10 pr-10"}>
                        <p className={"text-2xl"} >
                            กลับไปยังหน้า
                            <span onClick={() => navigate('/') } className={'font-heavent text-orange underline cursor-pointer font-bold pl-1'}>
                                เข้าสู่ระบบ
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SentEmailSucceededModal;