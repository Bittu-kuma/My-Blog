import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    const [openMenu,setOpenMenu] = useState(false);

    const handleClick = ()=>
    {
        setOpenMenu(!openMenu);
        // alert("ok");
    }
    return (
        <>
        
            <header className='header'>
                <div className='nav-brand'>
                    <Link to="/" className='a'>
                        <h1>My <span>B</span>logs</h1>
                    </Link>
                </div>
                <div className='open-nav'onClick={handleClick}>
                    <span></span>
                </div>
                <nav className='navbar'>
                    <ul className={openMenu ? 'navbar-menu':'navbar-menu openMenu'}>
                        <li className='menu-item active'>
                            <Link className='menu-link' to="/">Home</Link>
                        </li>
                        {/* <li className='menu-item'>
                            <a href='#' className='menu-link'>About</a>
                        </li> */}
                        <li className='menu-item'>
                            <Link className='menu-link' to="/blogs">Blogs</Link>
                        </li>
                        {/* <li className='menu-item'>
                            <a href='#' className='menu-link'>Gallery</a>
                        </li> */}
                        <li className='menu-item'>
                            <Link className='menu-link' to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header> 
        </>
    )
}

export default Navigation
