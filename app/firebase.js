import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBFxrpFtEczbEHxwQekescaFsrF4Mwc7eY',
  authDomain: 'time-slots-nextjs.firebaseapp.com',
  projectId: 'time-slots-nextjs',
  storageBucket: 'time-slots-nextjs.appspot.com',
  messagingSenderId: '254041849514',
  appId: '1:254041849514:web:f7ddfaa2b37fc626dd1ad3',
  measurementId: 'G-CSGMS0LV6X'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
