'use client'; 

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

export default function NotFound() {
  const router = useRouter(); 

  useEffect(() => {
    // Optional: Redirect to home after 3 seconds
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [router]); 

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => router.push('/')}
        style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Go back home
      </button>
    </div>
  );
} 
