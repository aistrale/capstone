import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './userPage.css';
/* import MyNav from './components/myNav/MyNav' */

const UserPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://localhost:3030/user/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}` // valore del contesto 
            }
        })
         .then(response => {
            if (!response.ok) throw new Error('Network error');
            return response.json();
         })
         .then(data => {
            setUser(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            setLoading(false);
        });
      }, [id])

    if (loading) return <div>Loading...</div>;
    return (
        <>
       {/*  <MyNav /> */}
        <div className='user-box'>Hello [User]</div>
        </>
    );
};

export default UserPage;
