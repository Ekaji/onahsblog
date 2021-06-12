import React, {useState, useEffect} from 'react'

const LandingPage = () => {

    const helloArray = [
        {}, //fixes bug where first value is not read
        {English : 'Hello'}, 
        {Yoruba : 'Bao ni'}, 
        {Igbo : 'Kedu'}, 
        {Nigerian_Pidgin : 'How fa'}, 
        {Hausa : 'Sannu'}
    ];
    
const [greeting, setGreeting] = useState((Object.values(helloArray[0])))
    
    useEffect(() => {
      let i = 0;
      const updateGreeting = () => {
      setGreeting( helloArray[i]);
          setTimeout(() => {
          if (i == helloArray.length-1) i = 0;
          i++;
      updateGreeting()
      },4000);
    }
    updateGreeting()
    return () => clearTimeout(updateGreeting);
    },[])

    return(
        <div id='Home' className="landing"> 
        <div className="content animate__animated animate__backInUp">
            <div className = "greeting " > {(Object.values(greeting))} </div>
            <div className="main-content ">
                <span className="myname ">  
                    <span> i'm <span className="name">ekaji onah,</span> web developer based in abuja, nigeria.</span>
                </span>
            </div>
        </div>
    </div>
    )
}

export default LandingPage