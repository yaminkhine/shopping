import { useState, useEffect } from 'react';
import { auth } from '../../../pages/firebase/firebase.js';

const CheckoutList = () =>{
    const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

      return (
    <div>
      {user ? (
        <p>Welcome, {user.email}!</p>
      ) : (
        <p>You are not logged in. Please log in.</p>
      )}
    </div>
  );
}

export  default CheckoutList;