import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let employee = {
  admin:'Alan ford',
  adminId:'0000005152',
  appointment:'9:00 (21-12-2021)',
  email:'kumarvipin24031999@gmail.com',
  phone:'9149390858',
  status:'in progress',
  door:'Mark',
  currentTime:'9:00 (22-12-2021)',
  name:'vipin kumar',
  designation:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quas odio in explicabo vitae ipsa dolores accusantium aut vero similique. Fugiat neque, quae beatae qui autem eos nihil culpa corrupti.',
  profileImg:'https://www.w3schools.com/howto/img_avatar.png'
}


ReactDOM.render(
  <React.StrictMode>
    <App profile = {employee}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
