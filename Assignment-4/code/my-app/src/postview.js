import React , {useEffect, useState} from 'react';
import heart from './heart.png'
import send from './send.png'
import cameraicon from './cameraicon.png'

function Navbar(props)
{
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a href = {Postview}>Instagram</a>
            </div>
            <div className = "camera">
                <a href = {Postview} ><img src = {cameraicon} alt = 'camera' /></a>
            </div>
        </nav>
    );
}
function Postdetails(props)
{
    return(
        <div className = "postheader">
            <div className = "userdetails">
                <h3 className = 'name'>{props.user.name}</h3>
                <p className = 'location'>{props.user.location}</p>
            </div>
            <div className = "threedots">
                <a href = {Postview}>...</a>
            </div>
        </div>
    );
}
function PostImg(props)
{
    return(
        <img src = {props.user.PostImage}  alt = "postimage" />
    );
}
function Postfooter(props)
{
    return(
        <div className = "postheader">
            <div className = "left">
                <img src = {heart} alt = 'likes'/>
                <img src = {send} alt = 'send' />
            </div>
            <div className = "date">
                <p>{props.user.date}</p>
            </div>
        </div>
    );
}
function Likes(props)
{
    return(
        <div className = "likes">
            <p>{props.user.likes}</p>
        </div>
    );
}
function Description(props)
{
    return(
        <div className = "desc">
            <p>{props.user.description}</p>
        </div>
    );
}
function Postview()
{
    const [allusers, setallusers] = useState([]);   
    useEffect(() => {
        fetch('http://localhost:3004/user').then((response) => {
            return response.json();
        }).then((data) => {
            setallusers(data);
        })
    },[]);
    return(
        <div className = "container-fluid">
            <Navbar/>
            <div className = 'main'>
                {allusers.map((user,index) => 
                    <div className = "post">
                        <Postdetails user = {user}/>
                        <PostImg user = {user}/>
                        <Postfooter user = {user} />
                        <Likes user = {user} />
                        <Description user = {user} />
                    </div>
                )}
            </div>
        </div>
    );
}
export default Postview