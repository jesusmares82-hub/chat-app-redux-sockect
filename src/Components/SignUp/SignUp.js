import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signupThunk } from "../../actions/config_action_chat";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HiOutlineLogin} from "react-icons/hi";
import { SiGnuprivacyguard} from "react-icons/si";

import "../SignUp/SignUp.css";

const SignUp = () => {
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
    dispatch(signupThunk(data));
    
  };
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              name="email"
              placeholder="Email"
              className="joinInput"
              type="text"
              ref={register}
            />
          </div>
          <div>
            <input
              name="username"
              placeholder="Username"
              className="joinInput"
              type="text"
              ref={register}
            />
          </div>
          <div>
            <input
              name="password"
              placeholder="Password"
              className="joinInput"
              type="password"
              ref={register}
            />
          </div>
          <div>
            <input
              name="room"
              placeholder="Room to join"
              className="joinInput"
              type="text"
              ref={register}
            />
          </div>
          <button className={"button mt-20"} type="submit">
           Sign Up <SiGnuprivacyguard />
          </button>

        <div>
          <Link className="mt-20" style={{ color: "#fff", textDecoration: "none" }} to="/">
            <h3> Already have an account? Log in <HiOutlineLogin /> </h3> 
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;