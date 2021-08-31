function Spa() {
  return (
    <HashRouter>
      {/* <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, loged: false}]}}> */}

      <ContextProvider>
      <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </ContextProvider>      
      {/* </UserContext.Provider> */}
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
