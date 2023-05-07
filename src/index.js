// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// import React from 'react';
// import ReactDOM from 'react-dom/client';

//[Bài đọc] Cú pháp JSX trong React

// function Hello(props) {
//   return <h1>Good afternoon Ha Bang, when child will come with my father! 2024? Thank so much, good bye school, i want to successful </h1>;
// }

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<Hello />);

//JSX is also an expression


// function formatName(user) {
//   return user[0].firstName + " " + user[0].lastName;
// }
// const user = [
// { firstName: "Ha", lastName: "Bang"},
// { firstName: "Doan", lastName: "Tung"},
// { firstName: "Thuy", lastName: "Duyen"}
// ]
// // We embed the result of a javaSrcipt function inside the <h1> element.
// let element = (
//   <h1>Hello, {formatName(user)}!</h1>
// )
// // to use syntax  React.createElement() for creating DOM element.
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

//JSX is object: React.createElement()
// Example 1: 
// const element = (
//   <h1 className="greeting">Hello world!</h1>
// );

// const element = React.createElement(
//   'h1',
//   {classname: "greeting"},
//   'Hello world'
// );

//Note: Cau truc nay da duoc don gian hoa
// const element = {
//   type: "h1",
//   props: {
//     className:"greeting",
//     children: 'hello world !'
//   }
// };

// Children's Transmission with JSX
//Nesting JSX: Nest elements between the start and end HTML tags.
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render (
//   <div className ="red">
//     <div className= "blue">
//     </div>
//   </div>
// )

// Pass a children with JSX:
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<div children={<div className='white'/>} className='black'/>)

// Styling with JSX is basically using the style attribute and passing in an object with a CSS property
// To style an element with an inline style attribute, the value must be a JavaScript object
// Example:
// const mystyle = {
//     width: "300px",
//     height: "125px",
//     backgroundColor: "red",
//     color: "yellow",
//     fontWeight: "bold",
//     borderRadius: "8px"
// }

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <h1 style ={mystyle}>Hello Thuy Duyen</h1>
//     <p>Lorem........</p>
//   </div>
// )


//[Bài đọc] Sử dụng được cú pháp gán thuộc tính trong JSX:
//React.createElement co cu phap  nhu sau:
// React.createElement(type, [props], [...children]);
// const hello = React.createElement(
//   "h1",
//   {id:"isg", className:"title"},
//   'hello Thuy Duyen'
// )
// //console.log(hello);
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(hello);

//JSX là một cú pháp mở rộng JavaScript được sử dụng trong React để dễ dàng viết HTML và JavaScript cùng nhau.
// let mes = {
//   color:"red",
//   fontFamily: "sans-serif"
// }
// let message = <div style={mes}>Hello Thuy Duyen</div>
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(message);

//Tương đồng giữa React.createElement và JSX:
// Example 1:
// function App() {
//   return React.createElement(
//     'div',
//     null,
//     React.createElement('p', null, "This is Thuy Duyen, she is mother of Ha Bang"),
//     React.createElement('p', null, 'This is Ha Bang, she is girlchild of Thuy Duyen')

//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)

// Example2: 
// function App() {
//   return (
//     <div className='app'>
//       <p>This is Thuy Duyen, She is Ha Bang mother</p>
//       <p>This is Ha Bang, She is Thuy Duyen child</p>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)




//[Practice] Embed your name in the React Element created by React.createElement
// The way 1:
// let name = "Thuy Duyen"
// let addName = React.createElement(
//   'h1',
//   {style:{color: "red", fontWeight: "bold", fontFamily: "sans-serif"}},
//   name
// );
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(addName);

// The way 2:
// import React from "react"
// import ReactDOM from "react-dom/client"
// const AddN = () => {
//   return React.createElement(
//     'h1',
//     {style:{width:"300px", height:"100px",lineHeight:"100px",textAlign:"center", backgroundColor:"blue", color:"white", fontFamily:"sans-serif", fontWeight:"bold"}},
//     "THUY DUYEN"
//   )
// }
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AddN/>)

//The way 3: 
// import React from "react"
// import ReactDOM from "react-dom/client"
// import "./index.css";
// import logo from "../../react-demo/src/assets/duyen193.png"
// let styleName = {
//   color:"Red",
//   width: "200px",
//   height: "100px",
//   backgroundColor: "yellow",
//   textAlign: "center",
//   lineHeight: "100px",
//   fontWeight:"bold",
//   borderRadius: "10px"
// }
// const AddName = () => {
//   return (
//   <div className="user">
//     <img className="img" src={logo} alt={"images"}/>
//     <p className="addname">Thuy Duyen Boutique</p>
//   </div>
//   )
// }
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AddName/>)









//[Practice] Create an element showing a list of fruits


// import React from "react"
// import ReactDOM from "react-dom/client"

//The way 1:
// function FruitsList() {
//   return (
//     <div>
//       <h1>List Of fruits</h1>
//       <ul>
//         <li>Apple</li>
//         <li>Banana</li>
//         <li>Orange</li>
//         <li>Apricot</li>
//         <li>Black rowan</li>
//         <li>Cranberry</li>
//       </ul>
//     </div>
//   )
// }
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FruitsList/>)

//The mode 2:
// let fruits = [
//   'Apple',
//   "Banana",
//   "Orange",
//   "Apricot",
//   "Black Rowan",
//   "Cranberry"
// ];
// function SetFruits() {
//     return (
//       <div>
//         <h1>List Of fruits Thuy Duyen</h1>
//         <ul>
//           {fruits.map(item =>
//               <li>{item}</li>
//           )}
//         </ul>
//       </div>
//     )
// }
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<SetFruits/>)

//The mode 3:

// function Fruits() {
//   return React.createElement(
//     'div',
//     null,
//     //'List of fruits'
//     React.createElement('h1', null, "List of fruits"), 
//     React.createElement('ul', null, 
//           React.createElement('li', {style:{color:"red"}}, "Apple"),
//           React.createElement('li', {style:{color:"blue"}}, "Banana"),
//           React.createElement('li', null, "Orange"),
//           React.createElement('li', null, "Pink"),
//           React.createElement('li', null, "Elemon"),
    
//     ) 
//   )
// }
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Fruits/>)



// [Practice] Current time display (dd/mm/yyyy – hh/mm/ss)

// import React from "react"
// import ReactDOM from "react-dom/client"

// let today = new Date();
// const Tike = () => {
//   return (
//     <div>
//         <h1>Hello World</h1>
//         <p>Current now, the time is {today.getHours() +":" + today.getMinutes() +":" + today.getSeconds()}</p>
//         <p>Today is {today.getDate() +"/" + (today.getMonth() +1) +"/" + today.getFullYear()}</p>
//     </div>
//   )
// }
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Tike/>);
// setInterval(Tike, 1000);

// import React from "react"
// import ReactDOM from "react-dom/client";
// //take the time currently:
// let style ={
//   color: "blue"
// }
// let root = ReactDOM.createRoot(document.getElementById("root"));
// const tim = () => {
//     root.render(
//         <div>
//           <h1>Hello World!</h1>
//           <h4 style={style}>It is {new Date().toLocaleTimeString()}.</h4>
          
//         </div>
//     )
// }
// setInterval(tim, 1000)


//[Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng

import React from "react"
import ReactDOM from "react-dom/client"

let root = ReactDOM.createRoot(document.getElementById("root"));

function Iforma() {
  root.render(
    <h1>Browser'S details: {navigator.userAgent}</h1>
  )
}
Iforma();