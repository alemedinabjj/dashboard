import * as S from './styles'
import { useState, useEffect, useContext } from 'react'
import { dataButtons } from './data'
import { Link, NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { ToggleLeft, ToggleRight } from 'phosphor-react'
import { ThemeContext } from '../../styles/ThemeProvider'
import { AuthContext } from '../../context/AuthContext'
import { storage } from '../../services/firebase'

import { useTransactions } from '../../context/useTransactions'
import { getPerfil, updatePerfil, getImages } from '../../services/perfil'
import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject
} from 'firebase/storage'
import { v4 as createId } from 'uuid'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const LinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const Sidebar = () => {
  const { user, handleLogout } = useContext(AuthContext)

  const navRef = useRef(null)
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(true)
  const { summary } = useTransactions()
  const [darkMode, setDarkMode] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [uploading, setUploading] = useState(false)
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(false)

  console.log(user)

  // const handleImageChange = e => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0])
  //   }
  // }
  // console.log(image)
  // const handleSubmit = () => {
  //   const imageRef = ref(storage, 'perfil')
  //   uploadBytes(imageRef, image)
  //     .then(() => {
  //       getDownloadURL(imageRef)
  //         .then(url => {
  //           console.log(url)
  //           setUrl(url)
  //         })
  //         .catch(error => {
  //           console.log(error)
  //         })
  //       setImage(null)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  // const getPhoto = async () => {
  //   setLoading(true)

  //   const storageRef = ref(storage, 'perfil')
  //   getDownloadURL(storageRef)
  //     .then(url => {
  //       setUrl(url)
  //       setLoading(false)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       setLoading(false)
  //     })
  // }

  // useEffect(() => {
  //   if (user.id) {
  //     getPhoto()
  //   }
  // }, [])

  const handleToggle = () => {
    setActive(!active)
  }

  const db = firebase.firestore()

  const getPerfil = async id => {
    const doc = await db.collection('users').doc(id).get()
    return doc.data()
  }

  const updatePerfil = async (id, data) => {
    await db.collection('users').doc(id).update(data)
    setUrl(data.url)
  }

  const getImages = async id => {
    const listRef = ref(storage, `images/${id}`)
    const res = await listAll(listRef)
    const urls = await Promise.all(
      res.items.map(async itemRef => {
        const url = await getDownloadURL(itemRef)
        return url
      })
    )
    return urls
  }

  const uploadImage = async (id, file) => {
    const fileName = createId()
    const fileRef = ref(storage, `images/${id}/${fileName}`)
    await uploadBytes(fileRef, file)
    const url = await getDownloadURL(fileRef)
    return url
  }

  const handleImageChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])

      setUploading(true)
      uploadImage(user.id, e.target.files[0])
        .then(url => {
          updatePerfil(user.id, { photoURL: url })
          setUploading(false)
        })
        .catch(error => {
          console.log(error)
          setUploading(false)
        })
    }
  }

  const handleSubmit = async () => {
    setUploading(true)
    const url = await uploadImage(user.id, image)
    const data = {
      photoURL: url
    }
    await updatePerfil(user.id, data)
    setUploading(false)
    setImage(null)
  }

  useEffect(() => {
    if (user.id) {
      getImages(user.id)
    }
  }, [])

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    handleOpen()
  }, [])

  return (
    <>
      <S.SidebarContainer
        className={open ? 'open' : 'close'}
        style={{
          backgroundColor: theme === 'light' ? 'white' : 'rgb(21, 32, 43)'
        }}
        border={
          theme === 'light'
            ? '1px solid rgb(230, 236, 240)'
            : '1px solid rgb(30, 45, 59)'
        }
      >
        <span className="openCloseButton" onClick={handleOpen} ref={navRef}>
          {open ? '⇦' : '⇨'}
        </span>
        <S.Content>
          <S.UserInfo>
            <img src={url} alt="user" />
            <div>
              <input type="file" onChange={handleImageChange} />
              <button onClick={handleSubmit}>Enviar</button>
            </div>
            <h2
              style={{
                display: open ? 'flex' : 'none',
                color: theme === 'light' ? 'black' : 'white'
              }}
            >
              {user.name}
            </h2>
          </S.UserInfo>
          <S.ButtonGroup>
            {dataButtons.map(item => (
              <NavLink to={item.path} key={item.id} style={LinkStyle}>
                <S.Button
                  key={item.id}
                  className={
                    window.location.pathname === item.path ? 'active' : ''
                  }
                  background={
                    theme === 'light' ? 'rgb(29, 161, 242)' : ' rgb(30, 45, 59)'
                  }
                  onClick={handleToggle}
                >
                  {item.icon}
                  <p
                    style={{
                      display: open ? 'block' : 'none',
                      color: theme === 'light' ? 'black' : 'white'
                    }}
                  >
                    {item.label}
                  </p>

                  {summary.total < 0 && item?.haveNotification && (
                    <span className="notification">1</span>
                  )}
                </S.Button>
              </NavLink>
            ))}
          </S.ButtonGroup>
        </S.Content>
        <S.ConfigArea>
          <S.Button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <>
                <ToggleLeft
                  size={44}
                  style={{
                    color: theme === 'light' ? 'black' : 'white'
                  }}
                  onClick={toggleTheme}
                />
                <p
                  style={{
                    display: open ? 'block' : 'none',
                    color: theme === 'light' ? 'black' : 'white'
                  }}
                >
                  Light Mode
                </p>
              </>
            ) : (
              <>
                <ToggleRight
                  size={44}
                  onClick={toggleTheme}
                  style={{
                    color: theme === 'light' ? 'black' : 'white'
                  }}
                />
                <p
                  style={{
                    display: open ? 'block' : 'none',
                    color: theme === 'light' ? 'black' : 'white'
                  }}
                >
                  Dark Mode
                </p>
              </>
            )}
          </S.Button>
          <S.Button
            onClick={handleLogout}
            background={
              theme === 'light' ? 'rgb(29, 161, 242)' : 'rgb(30, 45, 59)'
            }
          >
            <img
              src="https://img.icons8.com/ios/50/000000/settings.png"
              alt=""
            />
            <p
              style={{
                display: open ? 'block' : 'none',
                color: theme === 'light' ? 'black' : 'white'
              }}
            >
              Logout
            </p>
          </S.Button>
        </S.ConfigArea>
      </S.SidebarContainer>
    </>
  )
}
