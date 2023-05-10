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

// import React from "react"
// import ReactDOM from "react-dom/client"

// let root = ReactDOM.createRoot(document.getElementById("root"));

// function Iforma() {
//   root.render(
//     <h1>Browser'S details: {navigator.userAgent}</h1>
//   )
// }
// Iforma();


//[Exercise] Create an element that shows 
//the student dashboard in the classroom

// import React from "react"
// import ReactDOM from "react-dom/client"
// import "./index.css"


// let students = [
//     {
//         Company: "Alfreds Futterkiste",
//         contact: "Maria Anders",
//         country: "Germany"
//     },
//     {
//         Company: "Centro Comercial MocteZuma",
//         contact: "Francisco Chang",
//         country: "Mexico"
//     },
//     {
//         Company: "Emst Handei",
//         contact: "Roland Mendal",
//         country: "Austria"
//     },
//     {
//         Company: "Island Trading",
//         contact: "Helen Benett",
//         country: "UK"
//     },
//     {
//         Company: "Laughging Bacchus Winecellars",
//         contact: "Yoshi Tannamuri",
//         country: "Canada"
//     },
//     {
//         Company: "Magazzini Alimentari Riuniti",
//         contact: "Giovanni Rovelli",
//         country: "Italy"
//     }
// ];
// for(let item of students){
//     console.log(item);
// }

// let root = ReactDOM.createRoot(document.getElementById("root"));
// function DrawBoard() {
//     root.render(
//        <table>
//                 <h1>Students</h1>
//                 <tr>
//                     <th>Company</th>
//                     <th>Contact</th>
//                     <th>Country</th>
//                 </tr>
//             {students.map(student =>
//                 <tr>
//                     <td>{student.Company}</td>
//                     <td>{student.contact}</td>
//                     <td>{student.country}</td>      
//                 </tr>       
//             )}  
//        </table>
//     )
// }
// DrawBoard();

//[Exercise] Create an element that represents the Profile Card (as shown)
// import React from "react"
// import ReactDOM from "react-dom/client"
// import "./index.css"

// let root = ReactDOM.createRoot(document.getElementById("root"));

// function DrawCard() {
//     root.render(
//         <div className="card">
//             <div className="card_head">

//             </div>
//             <div className="card_img_back">

//             </div>
//             <div className="card_img">
//                 <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/330011175_591214892504735_8147581140057940848_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=e8pN2UOXROMAX--GgTQ&_nc_ht=scontent.fdad3-1.fna&oh=00_AfBefHKh4NGOtkAnz96BR_7htKYn7dRuvP-z4Pexmgv0Aw&oe=645E51CD"/>

//             </div>
//             <div className="card_body">
//                 <h2 className="body_head">Thùy Duyên Boutique</h2>
//                 <p className="body_text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
//                 The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et 
//                 Malorum for use in a type specimen book. </p>
//                 <button className="body_btn">FOLLOW</button>
//             </div>  
//         </div>
//     )

// }
// DrawCard();


// npm i --save bootstrap

//[Exercise] Create an Element that represents Sign in Form using Bootstrap
// import React from "react"
// import ReactDOM from "react-dom/client"
// import "bootstrap/dist/css/bootstrap.css"
// import "./index.css"

// const root = ReactDOM.createRoot(document.getElementById("root"));
// function DrawForm() {
//     root.render(
//         <form>
//             <div className="mb">
//                 <div className="mb-img">
//                     <img src="https://th.bing.com/th/id/OIP.cyGlxOKl3wJqBj4yaza_6QAAAA?pid=ImgDet&rs=1"/>
//                 </div>
//                 <div className="mb-head">
//                     <h2>Please Sign In</h2>
//                 </div>
//                 <div classNam="mb-3">
//                     <label for="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="exampleInputPassword1" class="form-label">Password</label>
//                     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
//                 </div>
//                 <div className="mb-3-form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                     <label className="form-check-label" for="exampleCheck1">Rememeber me</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Sign in</button>
//             </div>
//         </form>
//     )
// }
// DrawForm();



//===================[[[[[[[]]]]]]]=====================
//==============     react components       ============

// import React from "react"
// import ReactDOM from "react-dom/client"
//====[Reading] Components===

// ===1. Create a New Function Component:
// function Car() {
//     return <h1>Hello world, I'm also a car</h1>
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car/>)



// ===2. Create a New Class Component:
// class Car extends React.Component {
//     render() {
//         return <h2>Hi, i am a car</h2>
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />)

// ===3. Props concept (Another way to handle properties in a component is to use props.)
// Example 1: The component is a function;
// function Car(props) {
//     return <h1>I am a {props.color} car</h1>
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car color="blue"/>)

// Example 2: The component is a class function
// class Car extends React.Component {
//     render() {
//         return <h1>It is a {this.props.color} car</h1>
//     }
// }
//  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car color="purple"/>);

// ===4.Components in Components:
// Example 1: 
// class Car extends React.Component {
//     render(){
//         return <h2>I am a car!</h2>
//     }
// }
// class Garage extends React.Component {
//     render(){
//         return (
//         <div>
//         <h1>Who live in my Garage</h1>
//         <Car/>
//         </div>
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage/>)
// Example 2:
// function Car() {
//     return <h2>I am a supper car!</h2>
// }
// function Garage() {
//     return (
//     <div>
//     <h1>Who live in my Garage</h1>
//     <Car/>
//     </div>
//     ) 
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage/>)

//===5.Split Components into Separate Files
//Example 1: 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Car from './Car.js';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);




//=============[Reading] Props=====================
//  1. Use of Props: Transmit a variable
// The way 1:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './Car.js';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App headerProp="Header from props" contentProp ="content from props" />);


// The way 2:
// import React from "react"
// import ReactDOM  from "react-dom/client"
// import App from "./Car.js"

// let headerProp = "This is Ha Bang"
// let contentProp = "This is Bang Ha"

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App headerProp ={headerProp} contentProp={contentProp}/>)

//=== 2.Cast an object
//The way 1:
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./Car.js";

// const article = {
//   headerProp: "Header from props...",
//   contentProp: "Content from props..."
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App article={article} />);

//====3. Default props

// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./Car.js"

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)


//===== 4. Authentication Props

// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./Car.js"

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)





//=========[Reading] What pure functions mean for React Component===========================
// Pure Function
// Example: 

// function priceAfterTax(productPrice) {
//     return (productPrice * 0.20) + productPrice; 
// }

//Impure Function:
// Example:
// var tax = 20;
// function calculateTax(productPrice) {
//  return (productPrice * (tax/100)) + productPrice; 
// }

// import React from "react"
// import ReactDOM from "react-dom/client"
// import Welcome from "./component/Welcome.js"
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Welcome name="Ha Bang"/>)



//===========[Practice] Building Class Components

// import React from "react";
// import ReactDOM from "react-dom/client";
// import AddComponent from "./component/AddComponent";
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AddComponent firstNumber={2} secondNumber={2}/>)

//=======[Practice] Build Function component

// import React from "react"
// import ReactDOM from "react-dom/client"
// import AddComponent from "./component/AddComponent";
// import App from "./App.js"
// let root  = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)


import React from "react";
import ReactDOM from "react-dom/client"
import Alert from "./App.js"


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Alert text ="Warning! This resource does not exist!"/>)


