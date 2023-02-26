import {useState} from "react";
import './login.css'

function App() {
  const [entry, setEntry] = useState({
  fname:"",
  email:"",
  number:"",
  password:""
})

const [fill, setFill] = useState(false);

const inputEvent = (event)=>{
  const {value, name} = event.target;

  setEntry((oldValue)=>{
    return{
      ...oldValue, 
      [name]: value
    };
 }
 )
}

const submitdata = (event)=>{
  event.preventDefault();
    setFill(true);
}


 return (
    <div className="main">
      <div className="sub-main">
      { fill? <div className="text">
          <h1> Hello {entry.fname}, your have successfully registered</h1>
          <h2>Thank you</h2>
       </div> :<div>
          <div className="imgs">
          <div className="container-image">
          <i className="fas fa-bell fa-4x profile"></i>
          </div>
        </div>
        <div>
          <h1>User Login</h1>
          <form onSubmit={submitdata}>
          <div className="second-input">
          <i className="fas fa-user email"></i>
            <input type="text" placeholder="Enter username" onChange={inputEvent} name="fname" className="name" required value={entry.fname}  autoComplete="off" />
          </div>
          <div className="second-input">
            <i className="fas fa-envelope email"></i>
            <input type="email" placeholder="Enter email" onChange={inputEvent} name="email" className="name" required value={entry.email}  autoComplete="off"/>
          </div>
          <div className="second-input">
          <i className="fas fa-phone email"></i>
            <input type="text" placeholder="Enter contact number" onChange={inputEvent} name="number" required className="name" value={entry.number}  autoComplete="off" />
          </div>
          <div className="second-input">
          <i className="fas fa-lock email"></i>
            <input type="password" placeholder="Enter password"  onChange={inputEvent} name="password" required className="name" value={entry.password}  autoComplete="off" />
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
          </form>
          
        </div>
      </div>}
    </div>
    </div>
  );
}

export default App;


