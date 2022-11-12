import "./register.scss"
import { svgAssets } from "../../assets/asset"
import { useState } from "react";
import { isValidEmail } from "../../utils/isValidInput";

const Register = () => {
  const [email, setEmail] = useState({
    value: "",
    isValidEmail: false
  });
  const [password, setPassword] = useState("");

  const handleStarted = () => {
    const validEmail = isValidEmail({ email: email.value });
    return setEmail({
      ...email,
      isValidEmail: validEmail
    });
  };

  const handleFinish = () => {
    console.log('Finshed');
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={svgAssets.netflixIcon}
            alt="netflix-banner"
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {
          !email.isValidEmail ? (
            <div className="input">
              <input
                type="email"
                value={email.value}
                onChange={(e) => setEmail({
                  ...email,
                  value: e.target.value
                })}
                placeholder="email address"
              />
              <button
                className="registerButton"
                onClick={() => handleStarted()}
              >
                Get Started
              </button>
            </div>
          ) : (
            <div className="input">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
              <button
                className="registerButton"
                onClick={() => handleFinish()}
              >
                Start
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Register;