// src/App.jsx

import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';
import Auth from './components/Auth';

function Home({ user }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/auth');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline mb-4">
        Welcome to BillDoor!
      </h1>
      {user ? (
        <div>
          <p className="mb-4">You are logged in as {user.email}</p>
          <button 
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/auth" className="text-blue-500 hover:underline">
          Login or Sign Up
        </Link>
      )}
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This listener will update the user state whenever the auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
