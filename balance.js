function Balance(){
  const ctx = React.useContext(UserContext);
  let user = ctx.users.filter(user => user.loged === true)
  let index;
  let balance;
  if (user.length > 0) {
    index = ctx.users.indexOf(user[0])
    balance = ctx.users[index].balance
  }
  return (
    <>
      {
        user.length > 0 ?
        <Card
          bgcolor={'light'}
          txtcolor='dark'
          header={'Balance'}
          body={
            <h1>
              $ {balance}
            </h1>
          }
        />
        : <h2>Please Log in</h2>
      }
    </>
  )
}
