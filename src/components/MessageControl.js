import React from 'react'
import "./MessageControl.css"
import { IoSend,IoImages,IoAttachOutline,IoArrowBack } from "react-icons/io5";


export default function MessageControl(props) {
    // console.log("message control is called");
    const {sendMessage,setMedia,value,setStep,setMessage,groupMessages,sorted_key,selectedUser,username,media }=props;
    const key=sorted_key(username,selectedUser);
    const messages=(groupMessages[key] && groupMessages[key].length >0) ? groupMessages[key]:[];
    return (
        <div style={{height:"100vh"}}>
        <div className="main-chat" style={{height:"100vh"}}>
        <div className="chatTitle"><h4>{selectedUser}</h4>
        <div onClick={()=>{
            setStep(1)
        }} style={{margin:"auto 0"}}><IoArrowBack /></div>        
        </div>
        
        <div className="chatbox">

        <ul>

        {messages.map((msg,index)=>
        {
            if(msg.sender===username)
            {
            
           
                if(msg.media!==null)
                {

                return  <li  className="user" key={index}><div className="chat-image"><img src={msg.media} alt="chat-image"/></div></li>
                }
                else
                {
                    return (msg.message!=="" ? <li  className="user" key={index}><div className="user-text" >{msg.message}</div></li>:null)
                }

            }
            else
            {
           
                if(msg.media!==null)
                {

                return  <li  className="sender" key={index}><div className="chat-image"><img src={msg.media}  alt="chat-image" /></div></li>
                }
                else
                {
                    return (msg.message!=="" ? <li  className="sender" key={index}><div className="sender-text" >{msg.message}</div></li>:null)
                }
            
            }
        })
        }

        

        </ul>
    
        </div>
        {media ? <div className="file">
            <p>File loaded</p>
        </div>:null}        

        <div className="messageBox">
       
        <form onSubmit={(e)=>sendMessage(e)}>
        <textarea autoFocus value={value} onChange={(e)=>setMessage(e.target.value)} placeholder="enter text...!"></textarea>
        {/* <p>how are you</p> */}
        <label className="attachment" htmlFor="sendFile"><IoAttachOutline /></label>
        <input onChange={(e)=>
        {

        const file=e.target.files[0];
        console.log(file);
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function()
        {
            console.log(reader.result)
            if(reader.readyState===2)
            {   
            console.log(reader.result)
            setMedia(reader.result);
            }
        }
        reader.onerror=function(error)
        {
            console.log(error)
        }
        // setMedia(e.target.value)
        
        }
        } type="file" id="sendFile" />
        <button className="send" type="submit"><IoSend /></button>
        </form> 
        
         </div>
          
    </div>
    </div>
    )
}
