import React from 'react'

export default function SigninComponent() {
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
      <button onClick={login}>LogIn</button>
    </div>
  )
   
  function login () {
    
  }

}