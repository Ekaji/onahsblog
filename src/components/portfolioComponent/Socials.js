import React from 'react'

const Socials = () => {
    return(
        <div className="socials">
        {/* <p className="connect">CONNECT</p> */}
        <div className="socials-icons">
            <div className="github">
                {/* <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt='social-icons'/> */}
                <p><a href="https://github.com/Ekaji" target="blank">github</a> </p>
            </div>
            <div className="twiter">
                {/* <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt='social-icons'/> */}
                <p><a href="https://twitter.com/dev_Ekaji/" target="blank">twitter</a> </p>
            </div>
            <div className="linkedin">
                {/* <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt='social-icons'/> */}
                <p><a href="https://www.linkedin.com/in/ekaji-onah-819564150/" target="blank">linkedin</a> </p>
            </div>
        </div>
        <div className="footer">
            <p>website designed and built by yours truly</p>
            <p>&copy 2020</p>
        </div>  
    </div>
    )
}

export default Socials