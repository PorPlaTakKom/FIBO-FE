import React from 'react';
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg';
import {ReactComponent as HistoryIcon} from '../assets/icons/history.svg';
import {ReactComponent as PrintIcon} from '../assets/icons/print.svg';
const MenuIcon = (props) => {
    switch (props.name) {
        case "home":
            return <HomeIcon fill={props.fill}/>
        case "history":
            return <HistoryIcon fill={props.fill}/>
        case "print":
            return <PrintIcon fill={props.fill}/>
    }
};

export default MenuIcon;