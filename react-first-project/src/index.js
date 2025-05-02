import React from 'react';
import ReactDOM from 'react-dom/client';
//import { useEffect,useState } from 'react';
///////////////////////////////////////+
//function App() {
 // const [count, setCount] = useState(0);

 // useEffect( () =>{
 //   setTimeout( () =>{
  //    setCount((count) => count + 2)
  //  },2000)
 // },[])//empty array makes it render only once
  

 // return( <h3> The count fired several times{count} </h3>)
//}
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(< App />);

/////////////////////////////////+
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//////////////////////////////
//function App() {
 // const [count, setCount] = useState(0);

  //useEffect(() => {
  //  setTimeout(() => {
  //    setCount( (count) => count + 1)
  //  },1000);
 // });
 ///////////////////////////

 //function Counter() {
 // const[count,setCount] = useState(0);
  //const[calculation, setCalculation] = useState(0);

  //useEffect( () =>{
  //  setCalculation( () => count * 2)
 // },[count])
 // return (
 //   <>
 //   <p>count{count}</p>
 //   <button onClick={() => setCount((c) => c + 1)}>+</button>
 //   <p>Calculation: {calculation}</p>
//    </>
//  );
 //}
 //const root = ReactDOM.createRoot(document.getElementById('root'))
 //root.render(<Counter/>);
 /////////////////////////////////////////////+
 //function Timer () {
 // const [count, setCount] = useState(0);

 // useEffect(() =>{
//    let timer = setTimeout( () =>{
 //     setCount((count) => count + 9)
 //   },2000)
 //   return () => clearTimeout(timer)
 // },[]);
 // return(
 //   <h2>It has rendered{count}</h2>
//  )
 //}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer/>)
//////////////////////////////////////+

import {useState, createContext, useContext} from "react";

const UserContext = createContext();

function Component() {
    const [user, setuser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
        <h1>Component 2</h1>
        <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
        <h1>Component 3</h1>
        <Component4 />
        </>
    );
}

function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }
  
  function Component5() {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Component />)
