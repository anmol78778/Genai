import React from "react";
import { auth, googleProvider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import api from "../utils/axios";

function App() {
//   console.log(import.meta.env.VITE_SERVER_URL);
  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/auth/login",{token});
      console.log(data);
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
    }
  };


  const googleLogin = async () => {
    const result=await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken();
    console.log(token)
    await handleLogin(token);
    console.log(result);
  
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <button
        className="px-8 py-4 bg-white text-black rounded-lg"
        onClick={googleLogin}
      >
        Continue with Google
      </button>
    </div>
  );
}

export default App;