import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RiChatSmile3Line } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import { loginThunk } from "../../actions/config_action_chat";

import "./Join.css";

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const access = useSelector((state) => state.chat.access);

  useEffect(() => {
    if (access) {
      history.push("/chat");
    }
  }, [access, history]);

  const onSubmit = (data) => {
     dispatch(loginThunk(data));
    
  };
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join <RiChatSmile3Line /></h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              name="email"
              placeholder="Email"
              className="joinInput"
              type="text"
              autoComplete="off"
              ref={register}
            />
          </div>
          <div>
            <input
              name="password"
              placeholder="Password"
              className="joinInput"
              type="password"
              autoComplete="off"
              ref={register}
            />
          </div>
          <div>
            <input
              name="room"
              placeholder="Room"
              className="joinInput mt-20"
              type="text"
              autoComplete="off"
              ref={register}
            />
          </div>
          <button className={"button mt-20 mb-20"} type="submit">
            Log In <FaSignInAlt />
          </button>
        </form>
        <div>
          <Link className="mt-20" style={{ color: "#007580", textDecoration: "none" }} to="/signup">
            <h3> Create an account <RiAccountCircleLine /> </h3> 
          </Link>
        </div>
      </div>
    </div>
  );
}