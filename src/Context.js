import React, { createContext, useState } from 'react'

export const MyContext = createContext(null);
function Context({ children }) {
	const [headSatus, SetHeadSatus] = useState(true);
	const value = {headSatus, SetHeadSatus};

	return (
		<MyContext.Provider value={value}>
			{children}
		</MyContext.Provider>
	)
}

export default Context