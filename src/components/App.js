import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
// In App component, pass down data from user object as props to Home component so it renders correctly. 
//There is some starter code for you in Home component that should give you clues as to what props this component takes in.

// App should also pass down a prop of bio to the About component.

// Finally, App should pass down github and linkedin links to the About component, 
//so that About can pass those props down to the Links component you will create.



import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color={user.color} name={user.name} city={user.city} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
