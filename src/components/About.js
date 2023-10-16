import React from "react";
import Links from "./Links"

// Update the About component so that:

// If a prop of bio is passed to this component, it is displayed inside of a <p> tag
// If a prop of bio is not passed down, or if bio is an empty string, don't display the <p> tag
// Hint: you'll need to do some conditional rendering to an external site. here to determine whether or not to display the <p> tag



function About(props) {
  if(!props.bio || props.bio===""){
    return null
  } else {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
      }
    </div>
  );
  }
}

export default About;
