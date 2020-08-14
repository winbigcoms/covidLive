import React from 'react'
import styles from '../styles/signIn.module.scss'

export default function SigninComponent({login}) {
  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  return (
    <div className={styles.sign_body}>
    <form>
        <h1 className={styles.h1}>Wellcome<p className={styles.letter}>Corona Service</p></h1>
        <div className={styles.bar}></div>
        <div className={styles.sign_id}>
          <p>Email</p>
          <input className={styles.sign_input} type="email" ref={emailRef} />
        </div>
        <div className={styles.sign_pw}>
          <p>Password</p>
          <input className={styles.sign_input} type="password" ref={passwordRef} />
        </div>
        <div>
          <button className={styles.sign_btn} type="primary" onClick={click}>Sign-in</button>
        </div>
      </form>
      </div>
  )
   
  function click () {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    login(email, password)
  }

}