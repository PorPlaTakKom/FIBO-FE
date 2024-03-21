import React from 'react';

const PrinterLiveCard = (props) => {
    return (
        <div className={"flex w-3/12 h-72 p-1 cursor-pointer"}>
            <div className={"flex flex-col w-full h-full border-2 border-gray-500 rounded-lg overflow-hidden"}>
                <div className={"flex w-full h-2/3 bg-gray-500"}>
                    {/*Live Video*/}
                </div>
                <div className={"flex flex-col w-full h-1/3 bg-white p-1"}>
                    <p><span className={"font-heavent font-bold text-2xl"}>Canon ABCDE</span> เครื่องที่ 1</p>
                    <p>Filament : สีดำ</p>
                    <p className={"flex justify-end pr-5 items-center"}><span
                        className={"flex w-4 h-4 rounded-full bg-green-500 mr-2"}/>ว่าง</p>
                </div>
            </div>
        </div>
    );
};

export default PrinterLiveCard;