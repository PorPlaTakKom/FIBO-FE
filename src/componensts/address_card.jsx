import React from 'react';

const AddessCard = (props) => {
    return (
        <div className={"flex w-64 bg-white rounded-lg h-36 p-3 shadow-xl"}>
            <p>{props.address}</p>
        </div>
    );
};

export default AddessCard;