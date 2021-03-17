import React from 'react';

import { IoMdCloseCircle } from "react-icons/io";
import { FcOk } from "react-icons/fc";

import './ChatHeader.css';

const ChatHeader = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
    <FcOk /> {"  "}{"  "}
      <h5 className="ml-8">Room: {room}</h5>
    </div>
    <div className="centerInnerContainer"><h3>Websocket Chat</h3></div>
    <div className="rightInnerContainer">
      <a href="/"> <IoMdCloseCircle /></a>
    </div>
  </div>
);

export default ChatHeader;