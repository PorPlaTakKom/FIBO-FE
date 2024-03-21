import React from 'react';

const ClassCard = (props) => {
    return (
        <div className={"flex flex-col w-56 bg-white rounded-lg h-28 p-3 shadow-xl"}>
            <p><span className={"text-xl font-heavent_Bold"}>{props.item.subject}</span> {props.item.code}</p>
            <p>{props.item.school}</p>
            <p>{props.item.location}</p>
            <p className={"flex justify-end"}> สิ้นสุด {props.item.duration}</p>
        </div>
    );
};

export default ClassCard;