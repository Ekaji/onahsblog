import React, {useState} from 'react'

import '../../styles/hamburger.css'

const Navbar = () => {

    const [ menuState, setMenuState ] = useState(false)

    const handleClick = () => {
            setMenuState(!menuState)
            console.log(menuState)
    }

    return(
        <nav className="navigation">
            <div className="menu" >
                <button className={`hamburger hamburger--elastic ${menuState ? 'is-active': '' }`} type="button" onClick={handleClick}
                aria-label="Menu" aria-controls="navigation" aria-expanded="true/false">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <div className="menu-items">
                    <div className="items">
                        <ul>
                            <li className="split">
                                 <a className="nav-link" href="#Home">  Home  </a>
                            </li>
                            <li> 
                                <a className="nav-link" href="#projects"> Projects </a>
                            </li>
                            <li> 
                                <a className="nav-link" href="#Contact"> Contact </a> 
                            </li>
                        </ul>
                    </div> 
                </div> 
            </div>
        </nav>
    )
}

export default Navbar