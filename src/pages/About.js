import React from "react";

document.body.classList.add('backgroundColor:"#ccd5ae');
const About = () => {
    return (
        <div>
            <h1 style={{paddingLeft:20}}>
                Hi, Thank you for stopping by!
            </h1>
            <div>
                <div style={{display:"flex"}} >
                    <div style={{paddingLeft:20, paddingTop:20}}>
                        <img src= {require('../media/William_Nie_Prof.jpg')} width={250} style={{borderRadius:20}}/>
                    </div>
                    <div style={{paddingLeft:20, fontSize:20}}>
                        <p>Hi, my name is William Nie and I am currently a junior student at the Athenian School in Danville, California.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default About;