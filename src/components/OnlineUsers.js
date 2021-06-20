import React from 'react'
import "./OnlineUsers.css"

export default function OnlineUsers(props) {
    const {onUserSelect}=props;
    const users=props.users;
    const username=props.username
    return (

      <header className="app-header">


      <div className="center-div">
      <div className="main-div">
      <div className="app-name b-500 primaryColor">Online users</div>
      <ul className="online-users">

          {users && Object.keys(users).map((user,index)=>
          {

           return ( username!==user ? (<li key={index} onClick={()=>onUserSelect(user)}><p>{user}</p> <p className="round">3</p></li>) :null)
          })}
          
        </ul>
     
      </div>
      </div>
    
    
      </header>
    )
}
