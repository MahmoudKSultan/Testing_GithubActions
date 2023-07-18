// import { getCookie } from 'lib'
import { getCookie, removeCookie } from "./../../lib";
import React from "react";
import { useNavigate } from "react-router-dom";
export function ProtectedRoute({ children }) {
	let navigate = useNavigate();
	const currentUser = getCookie("currentUser");
	const isLoggedIn = currentUser?.token?.access_Token;
  
	if (!isLoggedIn || currentUser?.token?.exp < Date.now()) {
		removeCookie("currentUser");
		// navigate("/sign-in");
    window.location.pathname = "/sign-in";
	}

	return <>{children}</>;
}

export default ProtectedRoute;
