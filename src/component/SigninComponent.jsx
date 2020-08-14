import React from 'react'
import styles from '../styles/signIn.module.scss'

export default function SigninComponent({login}) {
  // const [state, setState] = useState({email:''})

  const buttonRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef()

  return (
    <div className={styles.sign_body}>
    <form>
        <h1 className={styles.h1}>Wellcome<p className={styles.letter}>Corona Service</p></h1>
        <div className={styles.sign_id}>
          <p>Email</p>
          <input className={styles.sign_input} type="email" onChange={change} ref={emailRef} placeholder="abc@gmail.com"/>
        </div>
        <div className={styles.sign_pw}>
          <p>Password</p>
          <input className={styles.sign_input} type="password" ref={passwordRef} />
        </div>
        <div>
          <button className={styles.sign_btn} type="primary" ref={buttonRef} onClick={click}>Sign-in</button>
        </div>
      </form>
      </div>
  )
   
  function click () {
    const email = emailRef.current.value;
    console.log(email)
    const password = passwordRef.current.value;
    login(email, password)
  }

  function change (e) {    
    const email = e.target.value
    const exptext = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

      if(exptext.test(email)===false){
          buttonRef.current.disabled = true
      }else {
      buttonRef.current.disabled = false
      }
    };
}