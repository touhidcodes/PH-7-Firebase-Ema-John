import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch(error =>{});
	};
	return (
		<nav className='header'>
			<img src={logo} alt='' />
			<div className='links'>
				<Link to='/'>Shop</Link>
				<Link to='/order-review'>Order Review</Link>
				<Link to='/inventory'>Manage Inventory</Link>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Sign up</Link>
				<p>
					{user && (
						<>
							<span className="user-email">{user.email}</span>
							<button onClick={handleLogOut} className="out-btn">Sign Out</button>
						</>
					)}
				</p>
			</div>
		</nav>
	);
};

export default Header;
