import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import MyNav from '../../components/myNav/MyNav';

const UserPage = () => {

    const {id} = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        fetch('localhost:3030/user', {
            headers:{
                'Authorization': 'Bearer ' // valore del contesto 
            }
        })
         .then(response => response.json())
         .then(json => setUser(json))
      }, [])

    return (
        <>
        <MyNav />
        <div>Hello {user ? user.name : ''}</div>
        </>
    );
}

export default UserPage;