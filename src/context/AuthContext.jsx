import { createContext, useEffect, useState } from 'react'
import { firebase, auth } from '../services/firebase'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handleLoginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)
    console.log(result)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  const handleLoginGithub = async () => {
    const provider = new firebase.auth.GithubAuthProvider()

    const result = await auth.signInWithPopup(provider)
    console.log(result)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  const handleLogout = () => {
    auth.signOut()
    setUser(null)
  }

  console.log(user)

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleLoginGoogle,
        handleLogout,
        handleLoginGithub
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
