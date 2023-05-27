import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/auth";

import "../SignupCard/SignupCard.css";
import { Card, CardContent, CardHeader, TextField } from "@mui/material";

function SignupCard() {
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");

  const [isPassvivible, setIsPassvivible] = useState("");
  const [isPassvivibleConfirm, setIsPassvivibleConfirm] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      console.log(`password don't match`);
    }
    const dataInSignup = {
      userName,
      email,
      password,
      phone,
    };
    signup(dataInSignup)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => console.error(error));
  }

  function goLogin() {
    return navigate("/login");
  }
  return (
    // <Card>
    //   <form onSubmit={handleSubmit}>
    //     <CardHeader title="Sign up">
    //       <CardContent>
    //         <TextField onChange={(e) => setUserName(e.target.value)}
    //         label='Your Nick'
    //         variant="outline"
    //         fullWidth={true}
    //         sx={{marginBottom}}
    //         />

    //       </CardContent>
    //     </CardHeader>
    //   </form>
    // </Card>
    <div className="authCard">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="login">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">
            Log in
          </label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required
          />
          <button>Log in</button>
        </form>
      </div>

      <div className="signup">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            className="input"
            type="	text"
            name="txt"
            placeholder="UserName"
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required
          />
          <input
            className="input"
            type="tel"
            name="phone"
            placeholder="phone"
            required
          />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupCard;
