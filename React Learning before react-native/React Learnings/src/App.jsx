import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

//import exportImport function
import ExportImport from "./exportImport";
import Student from "./Student";

function App() {
  return (
    //reuse the componets
    <div className="App">
      <Info />
      <SearchUser />
      {/* we can reause many as we want */}
      <Info />
      <SearchUser />
      <Info />
      <SearchUser />
      <ExportImport/>

      <h2>Props and State</h2>
      {/* //with Props
      //change data type of of the props to see the function of propTypes then check the console */}
      <Student name="Markey" age={45} isStudent = {false}/>
      {/* //multiple componets */}
      <Student name="Dave" age={17} isStudent = {true}/>

     {/* will appear the default props */}
      <Student age={12}/>
      <Student name="Mark"/>
    </div>
  );
}

//this is how to create compontents
function Info() {
  //jsx sentax 
  const title = "React";
  const showTitle = true;
  return (
    <div>
      <h1>My {showTitle ? title : ""} Learnings</h1>
      <p>How to create components</p>
    </div>
  );
}
function SearchUser() {
  const value = "default";
  return (
    <div>
      <p>Search for users</p>
      <input type="text" value={value} placeholder="username" />
      <button type="button">Search</button>
    </div>
  );
}
export default App;

//goto exportImport.jsx for export

