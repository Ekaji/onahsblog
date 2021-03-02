import React from 'react'
import { Link } from 'gatsby'
import '../../styles/navlinks.style.css'

const NavLinks = () => {
    const allLinks = [
        {home: '/'},
        {blog: '/blog'}
    ];

    return(
        <div className='navigation'>
        <h1 className='blog__heading'>Ekaji Onah</h1>
            {allLinks.map(link => ( 
                <Link to={`${Object.values(link)}`} >
                    <span>{Object.keys(link)}</span>
                </Link>
            )
        )}
        </div>
    )
}

export default NavLinks