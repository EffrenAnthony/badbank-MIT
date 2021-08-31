function NavBar(){ 
  const ctx = React.useContext(UserContext);
  const { logout, users } = useBankContext()
  let history = useHistory();
  const [currentUser, setCurrentUser] = React.useState()
  React.useEffect(()=>{
    let user = ctx.users.filter(user => user.loged === true)
    let index;
    if (user.length > 0) {
      index = ctx.users.indexOf(user[0])
      setCurrentUser(user[0])
    }
  },[users])
  const logOut = () => {
    let user = ctx.users.filter(user => user.loged === true)
    if (user[0]) {
      logout(user[0])
      setCurrentUser(null)
      // BUG
      history.push('/login/')
      
    } else {
      history.push('/login/')
    }
  }
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
      <button className="btn btn-primary" onClick={logOut}>{currentUser ? 'Log out' : 'Log In'}</button>
    </nav>
    </>
  );
}