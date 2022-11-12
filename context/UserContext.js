import Cookies from 'js-cookie';
import { createContext, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { initialState as UserInitState, setUser } from 'store/reducers/userSlice';

const UserContext = createContext({
  ...UserInitState,
  method: 'UserAuth',
});

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const user = Cookies.get('user')
    if (user) {
      dispatch(setUser(JSON.parse(user)))
    }
  }, [dispatch])

  return (
    <UserContext.Provider
      value={{
        ...UserInitState
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
