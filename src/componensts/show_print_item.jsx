import React, {useEffect} from 'react';
import {ReactComponent as TimeLogo} from '../assets/icons/time.svg';
const ShowPrintItem = (props) => {
    useEffect(()=>{
        console.log(props)
    },[])
    return (
        <div className={"flex w-full h-36"}>
            <div className={"flex w-full h-full border-2 border-gray-500 rounded-xl overflow-hidden"}>
                <div className={"flex w-1/6 h-full bg-gray-500"}>
                    {/*image*/}
                </div>
                <div className={"flex flex-col pl-5 pr-5 pt-3 pb-3 w-5/6 h-full"}>
                    <div className={"flex items-center w-full h-1/4"}>
                        <p className={"font-heavent text-2xl"}>{props?.item.items[0]?.name.toUpperCase()}</p>
                    </div>
                    <div className={"flex flex-col justify-center w-full h-2/4 text-lg"}>
                        <p>{props?.item.items[0]?.machine} | Filament:{props?.item.items[0]?.color}</p>
                        <p>{props?.item.location}</p>
                    </div>
                    <div className={"flex pr-10 items-center w-full h-1/4 justify-end"}>
                        <div className={"flex w-44 h-8 "}>
                            <div className={"flex items-center w-1/2 text-xl"}>
                                <TimeLogo/>
                                <p className={"pl-3"}> อีก {props?.item.items[0]?.duration} ชม.</p>
                            </div>
                            <div className={"flex w-1/2"}>
                                <div className={"flex items-center w-full h-full text-xl"}>
                                    <span className={"flex w-3 h-3 rounded-full" + `${props?.item.items[0]?.status !== 'กำลังพิมพ์' ? ' bg-blue-500' : ' bg-orange'}`}/>
                                    <p className={"pl-3"}>{props?.item.items[0]?.status}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowPrintItem;