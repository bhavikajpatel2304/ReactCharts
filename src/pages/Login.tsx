import "../styles/Login.css";
import bug from "../images/logo.png";
import axios from "axios";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setError("");
  }

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    setError("");
  }

  const handleLogin = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // using context api, set universal token for global usage
    let body = {
      email: email,
      password: password
    }

    await axios.post("http://127.0.0.1:5000/udit/login", body).then((response) => {
        if(response.data.code === 200) {
          navigate("/dashboard");
        } 
      }).catch((err) => {
        if(err.response) {
          setError(err?.response.data.message);
        }
      });
  }

  return (
      <div>
        <div className="split left left-ratio">
        <div className="centered">
          <img src={bug}/>
          <h2>Creepy Crawly</h2>
          <h6>&#169; {new Date().getFullYear()} Creepy Crawly</h6>
        </div>
      </div>
      <div className="split right grad right-ratio">
        <div className="container" id="container">
            <div>
                <form action="/">
                    <h1>Sign in</h1>
                    <input id="email" type="email" required placeholder="Email" onChange={(e) => handleEmailChange(e.target.value)}/>
                    <span>We don't share your email with anyone.</span>
                    <input id="password" type="password" required placeholder="Password" onChange={(e) => handlePasswordChange(e.target.value)}/>
                    <a href="#">Forgot your password?</a>
                    <button  onClick={(e) => handleLogin(e)} className="login">Identify Me</button>
                </form>
                {error !== "" && <Alert severity="warning">
                          {error}
                      </Alert>
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;