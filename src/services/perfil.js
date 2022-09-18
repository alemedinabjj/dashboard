import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject
} from 'firebase/storage'
import { v4 as createId } from 'uuid'
import { storage } from './firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const db = firebase.firestore()

export const getPerfil = async (id) => {
  const doc = await db.collection('users').doc(id).get()
  return doc.data()
}

export const updatePerfil = async (id, data) => {
  await db.collection('users').doc(id).update(data)
}

export const getImages = async (id) => {
  const listRef = ref(storage, `images/${id}`)
  const res = await listAll(listRef)
  const urls = await Promise.all(
    res.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef)
      return url
    })
  )
  return urls
}

export const uploadImage = async (id, file) => {
  const fileName = createId()
  const fileRef = ref(storage, `images/${id}/${fileName}`)
  await uploadBytes(fileRef, file)
  const url = await getDownloadURL(fileRef)
  return url
}

export const deleteImage = async (id, url) => {
  const fileName = url.split('%2F').pop().split('?').shift()
  const fileRef = ref(storage, `images/${id}/${fileName}`)
  await deleteObject(fileRef)
}

export const deletePerfil = async (id) => {
  await db.collection('users').doc(id).delete()
}
