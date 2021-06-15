import React from 'react'

export default function OnlineUsers(props) {
    const {onUserSelect}=props;
    const users=props.users;
    const username=props.username
    return (
        <div>
        <div>Online users</div>
        <ul>

          {users && Object.keys(users).map((user,index)=>
          {

           return ( username!==user ? (<li key={index} onClick={()=>onUserSelect(user)}>{user}</li>) :null)
          })}
          
        </ul>
        </div>
    )
}
