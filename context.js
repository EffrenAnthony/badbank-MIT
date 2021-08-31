const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const useHistory = ReactRouterDOM.useHistory;

function useBankContext () {
  return React.useContext(UserContext)
}
function ContextProvider({children}){
  const [users, setUsers] = React.useState([{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, loged: false}])
  function login(user){
    const index = users.indexOf(user)
    const usersCopy = [...users]
    usersCopy[index].loged = true
    setUsers(usersCopy)
  }
  function logout(user){
    const index = users.indexOf(user)
    const usersCopy = [...users]
    usersCopy[index].loged = false
    setUsers(usersCopy)
  }
  const value = {
    users,
    login,
    logout
  }
    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    )
  }