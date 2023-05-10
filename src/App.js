// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react"
// import ReactDOM from "reat-dom/client"
// import Car from "./index"

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);
// import AddComponent from "./component/AddComponent";
// function App() {
//     return (
//         <AddComponent firstName={1} secondName={9}/>
//     )
// };
// export default App;

import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import "./index.css"

function Alert(props) {
    return (
        <div className="alert alert_warning" >
            <span className="alert_icon"><FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#FFD700",height: "40px", lineHeight: "50px",}} /></span>
            <div className="alert_text">{props.text} </div>
        </div>
    )
}
export default Alert;