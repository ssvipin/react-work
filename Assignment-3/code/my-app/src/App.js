import logo from './logo.svg';
import './App.css';

const leftArrow = "<";

function App(props) {
return(
  <div className = "site-container">
  <div className = "pageTop">
    <div className = "arrow">
      <h1>{leftArrow}</h1>
    </div>
    <div className = "admin-name">
      <h3>{props.profile.admin}</h3>
      <p>{props.profile.adminId}</p>
    </div>
    <div className = "print">
      <button>Print</button>
    </div>
  </div>
  <div className = "customer-info">
    <div className="appointment">
    <h4>Appointment:</h4>
    <p>{props.profile.appointment}</p>
    </div>
    <div className="email">
    <h4>Email:</h4>
    <p>{props.profile.email}</p>
    </div>
   <div className="phone">
   <h4>Phone:</h4>
    <p>{props.profile.phone}</p>
   </div>
  </div>
  <div className = "order-info">
    <div className="status">
      <h4>Status</h4><br/>
      <ul>
        <li>{props.profile.status}</li>
      </ul>
    </div>
    <div className="door">
    <h4>Door</h4><br/>
    <p>{props.profile.door}</p>
    </div>
    <div className="time">
    <h4>Time</h4><br/>
    <p>{props.profile.currentTime}</p>
    </div>
  </div>
  <div className = "product-details">
    <div className="checkbox">
    <input type = "checkbox"></input>
    </div>
    <div className="img">
    <img  src = {props.profile.profileImg} alt = {props.profile.name}/>
    </div>
    <div className="details">
    <h1>{props.profile.name}</h1>
    <p>{props.profile.designation}</p>
    </div>
  </div>
</div>
);
}

export default App;
