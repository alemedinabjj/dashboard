import * as S from './styles'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect, useState } from 'react'
import { auth } from '../../services/firebase'
import { useRef } from 'react'
import Google from '../../assets/icons/Google.svg'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const nameRef = useRef(null)

  const [showInputs, setShowInputs] = useState(false)

  const { handleLoginGoogle, handleLoginGithub, user, setUser } =
    useContext(AuthContext)

  const signUp = e => {
    e.preventDefault()

    if (nameRef.current.value === '') {
      alert('Please enter a name')
      return
    }

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(cred => {
        return cred.user.updateProfile({
          displayName: nameRef.current.value
        })
      })
      .then(authUser => {
        console.log(authUser)
        setUser({
          id: authUser.user.uid,
          name: nameRef.current.value,
          email: emailRef.current.value
        })
      })
      .catch(error => {
        alert(error.message)
      })

    setShowInputs(false)
    alert('Account created successfully')
  }

  const signIn = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        setUser({
          id: authUser.user.uid,
          name: authUser.user.displayName,
          email: authUser.user.email
        })
      })

      .catch(error => {
        alert(error.message)
      })
  }

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       const { displayName, email, uid } = user

  //       if (!displayName) {
  //         throw new Error('Missing information from Google Account.')
  //       }

  //       setUser({
  //         id: uid,
  //         name: displayName,
  //         email: email
  //       })
  //     }
  //   })

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [])

  return (
    <S.Container>
      <S.Content>
        {' '}
        <h1>Login</h1>
        <S.Form action="">
          <S.Input type="email" placeholder="Email" ref={emailRef} />
          <S.Input
            type="text"
            placeholder="Name"
            ref={nameRef}
            style={{ display: showInputs ? 'block' : 'none' }}
          />
          <S.Input type="password" placeholder="Password" ref={passwordRef} />
          <S.Button
            type="submit"
            onClick={signIn}
            style={{
              display: showInputs ? 'none' : 'block'
            }}
          >
            Login
          </S.Button>
          <S.Button
            type="submit"
            onClick={signUp}
            style={{
              display: showInputs ? 'block' : 'none'
            }}
          >
            Register
          </S.Button>
        </S.Form>
        <S.ButtonGroup>
          <S.LoginSocial onClick={handleLoginGoogle}>
            <img src={Google} alt="Login com Google" />
            Login com Google
          </S.LoginSocial>
          <S.LoginSocial onClick={handleLoginGithub}>
            <BsGithub size={20} color="black" />
            Login com Github
          </S.LoginSocial>
        </S.ButtonGroup>
        <S.Paragraph>
          Not a member?{' '}
          <span onClick={() => setShowInputs(!showInputs)}>Sign Up Now</span>
        </S.Paragraph>
      </S.Content>
    </S.Container>
  )
}
