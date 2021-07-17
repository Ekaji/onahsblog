import React from 'react'
import avata from '../../images/portfolioImages/avataaars.webp'


const About = () => {
 return(
    <div className="about">
    <div className=" intro">
        <h2>About Me</h2>
        <p>I'm a web developer based in Abuja, Nigeria. I like to create beautiful and responsive desktop and mobile websites.
        </p>
        <img src={avata} alt="avata" />
    </div>
    <div className=" my-stack">
        <h2>Stack I Work With</h2>
            <div className="stack">
                    <div className="stack-icon">
                        <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='stack'/>
                    </div>
                    <div className=" stack-icon">
                        <img src="https://img.icons8.com/cute-clipart/48/000000/react-native.png" alt='stack'/>
                    </div>
                    <div className=" stack-icon">
                        <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt='stack'/>   
                    </div>
        
                    <div className=" stack-icon">
                        <img src="https://img.icons8.com/color/48/000000/css3.png" alt='stack'/>
                    </div> 
                    <div className="stack-icon">
                        <img src="https://img.icons8.com/color/48/000000/javascript.png" alt='stack'/>    
                    </div> 
            
                    <div className=" stack-icon">
                        <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='stack'/>
                    </div>    
                    
                    <div className="stack-icon">
                        <img src="https://img.icons8.com/color/48/000000/html-5.png" alt='stack'/>
                    </div> 
                    <div className=" stack-icon">
                        <img src="https://img.icons8.com/color/48/000000/npm.png" alt='stack'/>   
                    </div> 
            
                    <div className="stack-icon">
                        <img src="https://img.icons8.com/color/48/000000/sass.png" alt='stack'/>
                    </div> 
            </div>
    </div>
</div>
 )
}

export default About