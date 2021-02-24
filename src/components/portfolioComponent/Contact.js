import React from 'react'

const Contact = () => {
    return(
        <div id="Contact" className="contact">
        <p className="getintouch">Intrested in working With me? <a href="mailto:ekajionah@gmail.com?subject=Hello%20user" target="blank">Contact Me.</a> </p>
        <p className="getintouchText">Together we could build something exciting.</p>
        <div className="email">
            <div>
                <img src="https://img.icons8.com/ios/50/000000/send-mass-email.png" alt='contact-icon'/>
                 <p><a href="mailto:ekajionah@gmail.com?subject=Hello%20user" target="blank">ekajionah@gmail.com</a> </p>
            </div>
        </div>
    </div>
    )
}

export default Contact 