// import logo from './logo.svg';
import './App.css';

function Userinfo(props)
{
  return (
    <div className = "userProfile">
    <img src = {props.employee.profileImg} 
    alt = {props.employee.name}/>
  </div>
  );
}

function Username(props)
{
  return (
    <div className = "userName">
    <h1>{props.employee.name}</h1>
  </div>
  );
}

function Location(props)
{
  return (
    <div className = "location">
    <p>Location</p>
    <h1>{props.employee.location}</h1>
  </div>
  );
}

function Bloodgroup(props)
{
  return (
    <div className = "bloodGroup">
        <p>Blood Group</p>
        <h1>{props.employee.bloodGroup}</h1>
      </div>
  );
}

function Age(props)
{
  return (
    <div className = "age">
        <p>Age</p>
        <h1>{props.employee.age}</h1>
      </div>
  );
}
function App(props) {
  return (
    <div className = "app">
      <Userinfo employee = {props.employee}/>
      <Username employee = {props.employee}/>
      <Location employee = {props.employee}/>
      <Bloodgroup employee = {props.employee}/>
      <Age employee = {props.employee}/>
    </div>
  );
}

export default App;
