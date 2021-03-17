import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import ChatHeader from "../ChatHeader/ChatHeader";
import UserForm from "../InputMessage/InputMessage";

import "../Chat/Chat.css";
import { useSelector } from "react-redux";


const ENDPOINT = "https://academlo-chat.herokuapp.com/";

let socket;

const Chat = () => {
const [users, setUsers] = useState(null);
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([]);
const username  = useSelector((state) => state.chat.user.username);
const  token  = useSelector((state) => state.chat.user.token);
const room = useSelector((state) => state.chat.roomToJoin);

  
  useEffect(() => {
     if (token && username) {
      socket = io(ENDPOINT, {
        query: {
          token
        }
      });

      

      socket.on("error", (err) => console.log(err));

      socket.emit("join", { name: username, room }, (error) => {
        if (error) {
          console.error(error);
        }
      });

      socket.on("message", (message) => {
        
        setMessages((messages) => [...messages, message]);
      });
      
      socket.on("roomData", (users) => {
        
        setUsers(users.users);
      });
    }
  }, [token, room, username]);

  

  const sendMessage = (event) => {
    event.preventDefault();
    
     
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
      
    }
  };

  return (
    <div className="grid">
      <ChatHeader room={room} />
      <div className="container">
        <Messages messages={messages} name={username} />
      </div>
      <UserForm
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;