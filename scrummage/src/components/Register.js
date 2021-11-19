import { Image, Button } from "react-bootstrap"
function Register() {
  return (
    <div className="register_body">
      <div>
        <input
          className="register_input"
          type="text"
          placeholder="Username"
        ></input>
        <input
          className="register_input"
          type="password"
          placeholder="Password"
        ></input>
        <input
          className="register_input"
          type="password"
          placeholder="Re-enter password"
        ></input>
        <input
          className="signup_input"
          type="text"
          placeholder="Birthday: MM/DD/YYYY"
        ></input>
        <input
          className="register_input"
          type="text"
          placeholder="Gender H/F"
        ></input>
        <textarea
          className="register_input"
          placeholder="Maybe you want to introduce yourself here..."
          rows="4"
          cols="50"
        ></textarea>
      </div>
      <Button className="login_button" variant="outline-primary" href="/">
        Done
      </Button>{" "}
    </div>
  )
}
export default Register
