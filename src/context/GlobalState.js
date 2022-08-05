import React, { createContext, useState } from "react";

export const GlobalContext = createContext();
const GlobalState = ({ children }) => {
	const [Auth, setAuth] = useState(false);
	const [userInfo, setUserInfo] = useState("");
	return (
		<GlobalContext.Provider value={{ Auth, setAuth, userInfo, setUserInfo }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
