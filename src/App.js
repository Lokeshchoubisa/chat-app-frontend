// import {useState} from "react"
import './App.css';
import {io} from "socket.io-client"
import React, { useEffect, useState } from "react"
import CreateUser from './components/CreateUser';
import MessageControl from './components/MessageControl';
import OnlineUsers from './components/OnlineUsers';

const socket=io("http://localhost:7000");


function App() {

  const [step, setStep] = useState(0);
  const [username,setUsername]=useState("")
  const [users,setUsers]=useState({});
  const [selectedUser,setSelectedUser]=useState("")
  const [message,setMessage]=useState("")
  const [media,setMedia]=useState(null);
  const [groupMessages,setGroupMessages]=useState({});
 

  const sorted_key=(username,reciever)=>
  {
      return [username,reciever].sort().join("-");
 
  }

  const sendMessage=(e)=>
  {
      
    // console.log("inside send message")
    e.preventDefault();
    const body={
      sender:username,
      reciever:selectedUser,
      message:message,
      media:media
    }
    console.log(body);
    setMessage("");
    socket.emit("send_message",body);
    const key=sorted_key(body.sender,body.reciever);
    if(key in groupMessages)
    {
      const new_message=[...groupMessages[key],body];
      // console.log("if key exist");
      // console.log(new_message);  
      setGroupMessages(preGroupMessages=>
        {
          return {...preGroupMessages,[key]:new_message}
        })
    }
    else
    {
      const new_message=[body];
      setGroupMessages(preGroupMessages=>
        {
          return {...preGroupMessages,[key]:new_message}
        })

    }

  
    
    if(media!==null)
    {
      setMedia(null);
    }
    
    // console.log(message)
  }


  

  useEffect(() => {

  console.log("useEffect is called ")
  socket.on("all_user",(users)=>
    {
      // console.log("all_users are called");
      // console.log(users);
      setUsers(users);
    })
  socket.on("new_message",(body)=>
  {
    // console.log("inside new message");
    // console.log(groupMessages);
    // window.scrollTo(0,document.querySelector(".chatbox ul").scrollHeight);
    console.log(body);
    setGroupMessages(preGroupMessages=>
      {
        const groupMessages=preGroupMessages;
        const key=sorted_key(body.sender,body.reciever);
        if(key in groupMessages)
        {
          const new_message=[...groupMessages[key],body];
          console.log("if key exist");
          // console.log(new_message);  
          setGroupMessages(preGroupMessages=>
            {
              return {...preGroupMessages,[key]:new_message}
            })
        }
        else
        {
          const new_message=[body];
          console.log("if key not  exist");
          setGroupMessages(preGroupMessages=>
            {
              return {...preGroupMessages,[key]:new_message}
            })
    
        }
        
      })

   
    
   
  })



  },[])
  // console.log(users);

  // console.log("online users are ")
  // console.log(users);
  // console.log(users);
// console.log("group messages are :-")
  // console.log(groupMessages);
// console.log(groupMessages);
  const onUserSelect=(key)=>
  { 
    setSelectedUser(key);
    setStep(pre=>pre+1);  
  }
  
  const onCreateUser=()=>
  { 
    console.log(username);
    socket.emit("new_user",username);
    setStep(pre=>pre+1);
  }
  // console.log("username is "+username)



  return (
    <div className="App">
    {
      step===0 ?<CreateUser value={username} onCreateUser={onCreateUser} onChange={(e)=>setUsername(e.target.value)} />
      :null
    }



    {
      step===1?(
       <OnlineUsers users={users} username={username} onUserSelect={onUserSelect} />
      ):null
    }



    {
      step===2?(<MessageControl media={media} username={username} groupMessages={groupMessages} sorted_key={sorted_key} value={message} setMedia={setMedia}  setMessage={setMessage} sendMessage={sendMessage} selectedUser={selectedUser} />):null
    }
</div> 
  )
}

export default App;
