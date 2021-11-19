import Button from './Button'

function Login() {
	return (
		<div className="login">
			<input className="login_input" type="text" placeholder="Username"></input>
			<input
				className="login_input"
				type="password"
				placeholder="Password"
			></input>
			<Button className="login_button" variant="outline-primary" href="/">
				Login
			</Button>{" "}
			<div className="login_signup">
				<a href="/signup">Don't have an account?</a>
			</div>
		</div>
	)
}

export default Login

