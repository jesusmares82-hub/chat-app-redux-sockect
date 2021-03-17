import React from "react";

import { FcOnlineSupport } from "react-icons/fc";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  
  <div className="textContainer">
    {users ? (
      <>
        <div className="activeContainer">
        <h4> <p>Users Online:</p></h4>
          <h5 style={{ marginLeft: 8 }}>
            {users.map(({ name, i }) => (
              <div key={name.id+i} className="activeItem">
                <FcOnlineSupport />
                <span style={{ color: "black", marginLeft: 8 }}>{name.charAt(0).toUpperCase() + name.slice(1)}</span> 
                
              </div>
            ))}
          </h5>
        </div>
      </>
    ) : "No hay usuarios para mostar"}
  </div>
);

export default TextContainer;