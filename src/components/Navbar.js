import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /* Will only show the button when the width is above 960 */
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true)
        }
    };

    /* allows you to render once and will never show again, that will allow Sign up to not show up
    every time we refresh */
    useEffect(() => {
       showButton()
    })

    window.addEventListener('resize',showButton);

    return (
        <>
           <nav class="navbar">
               <div class="navbar-container">
                   <Link to="/"  class="navbar-logo" onClick={closeMobileMenu} >
                       Dedsec  <i class="fas fa-user-secret"></i>
                   </Link>
                   <div class='menu-icon' onClick={handleClick}> 
                       <i class={click ? 'fas fa-times' : 'fas fa-bars'} /> {/*this will remove the menu 
                       once something is clicked on the menu, making the menu disappear*/}
                   </div>
                   <ul class={click ? 'nav-menu active' : 'nav-menu'}> 
                       <li class='nav-item'>
                           <Link to="/" class="nav-links" onClick={closeMobileMenu}>
                               Home
                           </Link>
                       </li>
                       <li class='nav-item'>
                           <Link to="/about" class="nav-links" onClick={closeMobileMenu}>
                               About
                           </Link>
                       </li>
                       <li class='nav-item'>
                           <Link to="/services" class="nav-links" onClick={closeMobileMenu}>
                               Services
                           </Link>
                       </li>
                       <li class='nav-item'>
                           <Link to="/sign-up" class="nav-links-mobile" onClick={closeMobileMenu}>
                               Sign Up
                           </Link>
                       </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
               </div>

               
           </nav>
        </>
    );
}

export default Navbar;


