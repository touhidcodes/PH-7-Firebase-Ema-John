import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
	const { logIn } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	console.log(from);
	console.log(location);

	const handleLogIn = (event) => {
		setError("");
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		// console.log(email, password);

		logIn(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				form.reset();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
			});
	};
	return (
		<div className='form-container'>
			<h2 className='form-title'>Login</h2>
			<form action='' onSubmit={handleLogIn}>
				<div className='form-control'>
					<label htmlFor=''>Email</label>
					<input type='email' name='email' required placeholder='email' />
				</div>
				<div className='form-control'>
					<label htmlFor=''>Password</label>
					<input
						type={show ? "text" : "password"}
						name='password'
						required
						placeholder='password'
					/>
				</div>
				<p
					onClick={() => {
						setShow(!show);
					}}
				>
					<small>
						{show ? <div>Hide Password</div> : <div>Show Password</div>}
					</small>
				</p>
				<input type='submit' value='Login' className='btn-submit' />
			</form>
			<p className='text-link'>
				<small>
					New to Ema John?
					<Link className='link' to='/signup'>
						Create an account
					</Link>
				</small>
			</p>
		</div>
	);
};

export default Login;
