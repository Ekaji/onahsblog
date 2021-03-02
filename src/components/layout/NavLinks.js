import React from 'react'
import { Link } from 'gatsby'

const NavLinks = () => {
    const allLinks = [
        {home: '/'},
        {blog: '/blog'}
    ];

    return(
        <div className='navigation'>
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