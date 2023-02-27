import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext({ user: null });
export const UserProvider = ({ children }) => {
  return (
		<UserContext.Provider value={{ user: false }}>
			{children}
		</UserContext.Provider>
  );
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
