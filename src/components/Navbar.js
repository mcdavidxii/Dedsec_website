import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
           <nav class="navbar">
               <div class="navbar-container">
                   <Link to="/"  classname="navbar-logo"  >
                       Dedsec <i class="fas fa-user-secret"></i>
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
                    </ul>
               </div>

               
           </nav>
        </>
    );
}

export default Navbar;


