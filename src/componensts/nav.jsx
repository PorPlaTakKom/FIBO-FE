import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menulist from '../data/menu.json';
import MenuIcon from './menu_icon.jsx';

const Nav = (props) => {
    const [menu, setMenu] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const newMenu = menulist.map((item) => {
            if (item.page === props.page) {
                return { ...item, isSelect: true };
            } else {
                return { ...item, isSelect: false };
            }
        });
        setMenu(newMenu);
    }, []);

    const handleMenuClick = (index) => {
        const updatedMenu = menu.map((item, i) => {
            if (i === index) {
                return { ...item, isSelect: !item.isSelect };
            } else if (item.isSelect) {
                return { ...item, isSelect: false };
            }
            return item;
        });
        setMenu(updatedMenu);

        // Use the navigate function to change the URL when menu item is clicked
        navigate(menu[index].page, { replace: true });
    };

    return (
        <ul className={'pl-10 pt-10 space-y-3 w-full h-full font-heavent text-2xl '}>
            {menu.map((item, index) => (
                <li key={index}>
                    <Link
                        to={item.page}
                        onClick={() => {
                            handleMenuClick(index);
                        }}
                        className={'flex flex-row w-full items-center h-10 cursor-pointer'}
                    >
                        <div className={'pr-3'}>
                            <MenuIcon fill={item.isSelect ? '#F47529' : 'gray'} name={item.icon} />
                        </div>
                        <p className={`${item.isSelect ? 'text-orange font-heavent_Bold' : 'text-gray-500'}`}>
                            {item.title}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Nav;
