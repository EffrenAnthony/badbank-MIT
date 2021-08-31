function BankForm({
  bgcolor,
  bgheader,
  label,
  handle,
  hideAmount,
  successButton
}){
  const ctx = React.useContext(UserContext); 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [amount, setAmount]       = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [userLoged, setUserLogged] = React.useState('');

  function getBalance(){
    let userloged = ctx.users.filter(user => user.loged === true);
    console.log(userloged)
    if (userloged.length > 0) {
      setBalance(userloged[0].balance)
      setUserLogged(true)
    } else {
      setBalance(false)
      setUserLogged(false)
    }
  }
  React.useEffect(() => {
    if (!hideAmount) {
      getBalance()
    }
  }, [show])
  function validate(field, label){
    if (!field) {
      setStatus('Error: missing ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }
  function handleBankForm(){
    console.log(name,email,password);
    if (hideAmount) {
      if (label !== 'Login') {
        if (!validate(name,     'name'))     return;
      }
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
    } else {
      if (!validate(amount, 'amount')) return;
    }
    let data = {
      name,
      email,
      password,
      amount
    }
    handle(data)
    setShow(false);
  }  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setAmount('');
    setShow(true);
  }


  return(
    <Card
      bgcolor={bgcolor}
      bgheader={bgheader}
      header={label}
      status={status}
      body={show ? (  
        <>
        {
          hideAmount
          ? <>
            {label !== 'Login' &&
            <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            </>
            }
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          </>
          :
          <>
            Balance: ${userLoged ? balance : "Login first"} <br/>
            <br />
            {label + ' Ammount'}
            <br />
            <input type="input" className="form-control" id="amount" placeholder={label + ' Ammount'} value={amount} onChange={e => setAmount(Number(e.currentTarget.value))}/><br/>
          </>
        }
        <button type="submit" className="btn btn-light" disabled={(!hideAmount && (label === 'Withdraw' && !balance || !userLoged)) ? true : (balance && balance <= 0) } onClick={handleBankForm}>{label}</button>
        </>
      ):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>{successButton}</button>
        </>
      )}
    />
  )
}