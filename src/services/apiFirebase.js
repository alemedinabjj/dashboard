import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app'
import { firebaseConfig } from './fire';



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default {
  addNewTransaction: (transaction) => {
    return db.collection('transactions').add(transaction);
  },
  getTransactions: () => {
    return db.collection('transactions').get();
  },
  deleteTransaction: (id) => {
    return db.collection('transactions').doc(id).delete();
  },
  updateTransaction: (id, transaction) => {
    return db.collection('transactions').doc(id).update(transaction);
  },
};
