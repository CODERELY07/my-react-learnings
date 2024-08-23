//import react library 
import React, {useState} from 'react';
//render the virtual dom
function MyComponent(){
    //use statehooks
    const [name, setName] = useState('');
    // try this code it will automatically output the name
    // const [name, setName] = useState('guest');
    
    //increment number
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    
    const updateName = ()=>{
        setName("Mark Dave");
    }

    const incrementAge = ()=>{
        setAge(age + 1);
    }

    //toggle true to false or false and true
    const toggleEmployedStatus = () =>{
        setIsEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus}>Increment Age</button>
        </div>
    )
}
export default MyComponent;