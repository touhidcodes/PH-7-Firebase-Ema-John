import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./loaders/CartProducts";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./components/Context/AuthProvider";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoutes from "./Routes/PrivateRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "/",
				element: <Shop />,
			},
			{
				path: "order-review",
				element: <OrderReview />,
				// loader: () => fetch("/products.json"),
				loader: cartProductsLoader,
			},
			{
				path: "inventory",
				element: (
					<PrivateRoutes>
						<Inventory />
					</PrivateRoutes>
				),
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <SignUp />,
			},
			{
				path: "checkout",
				element: (
					<PrivateRoutes>
						<CheckOut />
					</PrivateRoutes>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
