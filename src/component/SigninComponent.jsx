import React from 'react'

export default function SigninComponent(login) {
  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  return (
    <div>
      <p>
        <input type="text" ref={emailRef}/>
      </p>
      <p>
        <input type="password" ref={passwordRef}/>
      </p>
      <button onClick={click}>LogIn</button>
    </div>
  )
   
  function click () {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    login(email, password)
  }

}