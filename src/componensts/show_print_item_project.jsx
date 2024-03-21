import React, {useEffect, useState} from 'react';
import {ReactComponent as TimeLogo} from '../assets/icons/time.svg';
const ShowPrintItem = (props) => {

    const [isShow, setIsShow] = useState(false)
    useEffect(()=>{
        console.log(props)
    },[])
    return (
        <div className={"flex flex-col w-full h-auto"}>
            <div className={"flex flex-col w-full h-36"}>
                <div onClick={()=> setIsShow(!isShow)} className={"flex w-full h-full border-2 border-gray-500 border-b-2 bg-gray-300 cursor-pointer overflow-hidden" + `${isShow ? ' rounded-t-xl' : ' rounded-xl'}`}>
                    <div className={"flex w-1/12 h-full bg-red-300"}>
                        {/*image*/}
                    </div>
                    <div className={"flex flex-col pl-5 pr-5 pt-3 pb-3 w-11/12 h-full"}>
                        <div className={"flex items-center w-full h-1/4"}>
                            <p className={"font-heavent text-2xl"}>{props.item.name}</p>
                        </div>
                        <div className={"flex flex-col justify-center w-full h-2/4 text-lg"}>
                            <p>{props.item.machine} | Filament:{props.item.color}</p>
                            <p>{props.item.location}</p>
                        </div>
                        <div className={"flex pr-10 items-center w-full h-1/4 justify-end"}>
                            <div className={"flex w-44 h-8 "}>
                                <div className={"flex items-center w-1/2 text-xl"}>
                                    <TimeLogo/>
                                    <p className={"pl-3"}> อีก 1 ชม.</p>
                                </div>
                                <div className={"flex w-1/2"}>
                                    <div className={"flex items-center w-full h-full text-xl"}>
                                        <span className={"flex w-3 h-3 rounded-full" + `${props.item.status !== 'กำลังพิมพ์' ? ' bg-blue-500' : ' bg-orange'}`}/>
                                        <p className={"pl-3"}>{props.item.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                isShow && (props.item.items.map((i,n)=>(
                    <>
                        <div className={"flex w-full h-32 border-2 border-gray-500 border-t-0 overflow-hidden" + `${props.item.items.length-1 === n ? ' rounded-b-xl': ''}`} key={n}>
                            <div className={"flex w-1/6 h-full bg-pink-100"}>
                                {/*image*/}
                            </div>
                            <div className={"flex flex-col pl-5 pr-5 pt-3 pb-3 w-5/6 h-full"}>
                                <div className={"flex items-center w-full h-1/4"}>
                                    <p className={"font-heavent text-2xl"}>{i.name.toUpperCase()}</p>
                                </div>
                                <div className={"flex flex-col justify-center w-full h-2/4 text-lg"}>
                                    <p>{i.machine} | Filament:{i.color}</p>
                                    <p>{i.location}</p>
                                </div>
                                <div className={"flex pr-10 items-center w-full h-1/4 justify-end"}>
                                    <div className={"flex w-44 h-8 "}>
                                        <div className={"flex items-center w-1/2 text-xl"}>
                                            <TimeLogo/>
                                            <p className={"pl-3"}> อีก {i.duration} ชม.</p>
                                        </div>
                                        <div className={"flex w-1/2"}>
                                            <div className={"flex items-center w-full h-full text-xl"}>
                                                <span className={"flex w-3 h-3 rounded-full" + `${i.status !== 'กำลังพิมพ์' ? ' bg-blue-500' : ' bg-orange'}`}/>
                                                <p className={"pl-3"}>{i.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )))
            }
        </div>
    );
};

export default ShowPrintItem;