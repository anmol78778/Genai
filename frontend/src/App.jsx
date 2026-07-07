import React from 'react'
import { auth, googleProvider } from '../utils/firebase'
import { signInWithPopup } from 'firebase/auth'
function App() {

  const googleLogin = () =>{
    const data = signInWithPopup(auth, googleProvider)
    console.log(data)
  }

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <button className="w-5xl h-24 bg-white text-black" onClick={googleLogin}>
        continue with Google
      </button>
    </div>
  )
}

export default App
