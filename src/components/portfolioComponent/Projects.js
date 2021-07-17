import React from 'react'
// images
import bluesky from '../../images/portfolioImages/weathetr app.webp'
import bookmark from '../../images/portfolioImages/bkmark.webp'
import daytoday from '../../images/portfolioImages/todo.webp'
import landa from '../../images/portfolioImages/landa.webp'


const Projects = () => {
    return(
        <div id='projects' className="project">

            <h2>projects</h2>
            <div className="project-cards">
                <div className="card blueskies ">
                    <a href="https://ekaji.github.io/blueskies/" target="blank">
                        <img src={bluesky} alt="zzz"  />
                        <div className="card-text">
                            <div className="blueskies-gsapTrigger"></div>
                            <h3>blueskies weather app</h3>
                            <p>React,CSS,open weather api</p>
                        </div>
                    </a>
                </div>
                <div className="card bookmark ">
                    <a href="https://front-end-mentor-challenges-delta.vercel.app/bookmark-landing-page/index.html" target="blank">
                        <img src={bookmark} alt="zz"  />
                        <div className="card-text">
                            <div className="bookmark-gsapTrigger"></div>
                            <h3>bookmark</h3>
                            <p>HTML,CSS, javascript</p>
                        </div>
                    </a>
                </div>
                <div className="card landa ">
                    <a href="https://landerdotphotos.netlify.app/" target="blank">
                        <img src={landa} alt="zZ" className="card-image" /> 
                        <div className="card-text">
                            <div className="landa-gsapTrigger"></div>
                            <h3>landerdot photo gallery</h3>
                            <p>React, CSS</p>
                      </div>
                    </a>
                </div>
                <div className="card daytoday ">
                    <a href="https://daytoday.vercel.app/" target="blank">
                        <img src={daytoday} alt="ojl" className="card-image" />
                        <div className="card-text">
                            <div className="daytoday-gsapTrigger"></div>
                            <h3>daytoday</h3>
                            <p>React,CSS</p>
                        </div>
                    </a>
                </div>
            </div>     
  </div>
    )
}
export default Projects