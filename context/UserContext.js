import Cookies from 'js-cookie'
import { createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserSlice, { initialState as UserInitState, setUser } from 'store/reducers/userSlice'

const UserContext = createContext({
  ...UserInitState,
  method: 'UserAuth',
})

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user)

  useEffect(() => {
    if (!currentUser.id) {
      const user = Cookies.get('user')
      if (user) dispatch(setUser(JSON.parse(user)))
    }
  }, [dispatch])

  return (
    <UserContext.Provider
      value={{
        ...UserInitState,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
